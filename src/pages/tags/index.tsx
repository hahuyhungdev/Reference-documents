import './style.scss'

import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd'
import nodata from 'assets/images/nodata.png'
import { HttpStatusCode } from 'axios'
import { ModalAlert } from 'components'
import { ButtonCustom } from 'components/Button'
import { IconUnion } from 'components/Icons'
import { PopupTag } from 'components/Popup'
import { TagsTable } from 'components/Table'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { RootState, useAppDispatch } from 'reduxStore'
import { TagType, UpdateTagType } from 'types/common.type'
import { responseMessageError } from 'utils/handleData'

import { addTag, deleteManyTags, getTagList, searchTagByName } from './tags.slice'

export const Tags = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isCheckUseData, setIsCheckUseData] = useState(false)
  const [listIds, setListIds] = useState<number[]>([])
  const [optionsSearch, setoptionsSearch] = useState<{ label: string; value: string }[]>([])
  const [isModalConfirm, setIsModalConfirm] = useState(false)

  const dispatch = useAppDispatch()

  const { tagList, tagListSearch } = useSelector((state: RootState) => state.tags)
  useEffect(() => {
    const promise = dispatch(getTagList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  //  convert devicesList to optionsSearch with label and value
  useEffect(() => {
    const options = tagList.map((item) => {
      return {
        value: item.name,
        label: item.name
      }
    })
    setoptionsSearch(options)
  }, [tagList])

  const showPopup = () => {
    setIsModalVisible(true)
  }
  // handle create, but check duplicate { propertype:"name", value: "name of tag"}. if duplicate, return error
  const handleCreate = (values: UpdateTagType) => {
    console.log('values submit form', values)
    dispatch(
      addTag({
        ...values,
        status: 1
      })
    )
      .unwrap()
      .then((res) => {
        toast.success(res.message)
        setIsModalVisible(false)
      })
      .catch((err) => {
        responseMessageError(err)
      })
  }
  // deleteManyTags
  const handleDeleteMany = () => {
    dispatch(deleteManyTags(listIds))
      .unwrap()
      .then((res) => {
        toast.success(res.message)
        setIsCheckUseData(false)
        setIsModalConfirm(false)
      })
      .catch((err) => {
        if (err.response.status === HttpStatusCode.BadRequest) {
          toast.error(err.response.data.message)
        }
      })
  }

  const receiveIds = (values: number[]) => {
    setListIds(values)
  }
  // cancel deleteManyDevices
  const handleCancelDeleteMany = () => {
    setIsModalConfirm(false)
  }

  // here, we use debounce to delay the onChange event
  const onChangeSearch = debounce((value: string) => {
    console.log('onSelectSearch', value)
    if (value === '') {
      dispatch(getTagList())
      setIsCheckUseData(false)
    } else {
      dispatch(searchTagByName(value.trim()))
      setIsCheckUseData(true)
    }
  }, 500) // 500ms delay

  return (
    <div className='mainTags'>
      {tagList?.length === 0 ? (
        <>
          <h3>Tags List</h3>
          <div className='empty'>
            <img src={nodata} alt='nodata' />
            <h3>No data</h3>
            <ButtonCustom isIcon icon={<IconUnion />} onClick={showPopup}>
              Create new
            </ButtonCustom>
            {isModalVisible && (
              <PopupTag
                onFinish={handleCreate}
                title='Add Object'
                onCancel={() => setIsModalVisible(false)}
                onOpen={isModalVisible}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <header>
            <title>Tags List</title>
            <div className='toolbar'>
              <AutoComplete
                open={false}
                options={optionsSearch}
                style={{ width: 200 }}
                filterOption={true}
                placeholder='Search'
                onChange={onChangeSearch}
              >
                <Input suffix={<SearchOutlined />} />
              </AutoComplete>
              <ButtonCustom isIcon icon={<IconUnion />} onClick={showPopup}>
                Create
              </ButtonCustom>
              {listIds.length > 1 && (
                <ButtonCustom
                  className='bg-red-500'
                  onClick={() => {
                    setIsModalConfirm(true)
                  }}
                >
                  Delete All
                </ButtonCustom>
              )}
              {isModalConfirm && (
                <ModalAlert
                  onFinish={handleDeleteMany}
                  onCancel={handleCancelDeleteMany}
                  title='Are you sure delete all devices?'
                  content='You can’t undo this action'
                  onOpen={isModalConfirm}
                />
              )}
              {/* <ButtonCustom onClick={handleDeleteMany}>Delete All</ButtonCustom> */}
            </div>
          </header>
          {isModalVisible && (
            <PopupTag
              onFinish={handleCreate}
              title='Add Object'
              onCancel={() => setIsModalVisible(false)}
              onOpen={isModalVisible}
            />
          )}
          <TagsTable dataTag={isCheckUseData ? tagListSearch : tagList} tagIds={receiveIds} />
        </>
      )}
    </div>
  )
}

export default Tags
