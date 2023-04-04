/* eslint-disable no-unused-vars */
import './style.scss'

import { Table } from 'antd'
import nodata from 'assets/images/nodata.png'
import { ButtonCustom } from 'components/Button'
import { IconUnion } from 'components/Icons'
import { ModalAlert } from 'components/Modal'
import { PopupTag } from 'components/Popup'
import moment from 'moment'
import { deleteTagById, updateTagById } from 'pages/tags/tags.slice'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'reduxStore'
import { TagType } from 'types/common.type'
import { responseMessageError } from 'utils/handleData'

interface TagsTableType {
  dataTag: TagType[]
  tagIds: (values: number[]) => void
}

const init = {
  id: 0,
  id_tag: '',
  name: '',
  status: 1,
  description: '',
  createdDate: '',
  updatedDate: ''
}
export const TagsTable = ({ dataTag, tagIds }: TagsTableType) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
  const [dataRows, setDataRows] = useState<TagType>(init)

  const [isModalEdit, setIsModalEdit] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false)

  const dispatch = useAppDispatch()

  const onSelectChange = (newSelectedRowKeys: number[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    // pass data to parent component
    tagIds(newSelectedRowKeys)
  }

  const handleCancel = () => {
    console.log('Cancel')
    setIsModalConfirm(false)
    setIsModalEdit(false)
  }

  // func handle delete
  const handleDelete = () => {
    console.log('dataRows', dataRows)
    dispatch(deleteTagById(dataRows.id))
      .unwrap()
      .then((res) => {
        toast.success(res.message)
      })
    setIsModalConfirm(false)
  }
  // func handle edit

  const handleEdit = (values: TagType) => {
    console.log('values submit form', values)
    dispatch(
      updateTagById({
        tagId: dataRows.id,
        body: {
          ...values,
          status: 1
          // status: 1,
          // id_tag: values.id_tag,
          // name: values.name,
          // description: values.description
        }
      })
    )
      .unwrap()
      .then((res) => {
        console.log('res', res)
        setIsModalEdit(false)
        toast.success(res.message)
      })
      .catch((err) => {
        responseMessageError(err)
      })
  }

  const columns = [
    {
      title: 'Name tag',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span>{text}</span>,
      width: 150
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => <span>{text}</span>
    },
    {
      title: 'Create at',
      dataIndex: 'createdDate',
      key: 'createdDate',
      defaultSortOrder: 'descend',
      sorter: (a: { createdDate: moment.MomentInput }, b: { createdDate: moment.MomentInput }) => {
        console.log('a', a.createdDate)
        return moment(a.createdDate).unix() - moment(b.createdDate).unix()
      },
      render: (text: string) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      },
      width: 120
    },
    {
      title: 'Update at',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      defaultSortOrder: 'descend',
      sorter: (a: { updatedDate: moment.MomentInput }, b: { updatedDate: moment.MomentInput }) => {
        console.log('a', a.updatedDate)
        return moment(a.updatedDate).unix() - moment(b.updatedDate).unix()
      },
      render: (text: number) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      },
      width: 120
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_: any, record: any) => (
        <div className='action' style={{ display: 'flex', justifyContent: 'center', columnGap: '16px' }}>
          <span
            onClick={() => {
              setIsModalEdit(true)
              setDataRows(record)
            }}
          >
            Edit
          </span>
          <span
            onClick={() => {
              setIsModalConfirm(true)
              setDataRows(record)
            }}
          >
            Delete
          </span>
        </div>
      ),

      width: 150
    }
  ]
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT]
  }

  return (
    <div className='TagsTable'>
      {isModalConfirm && (
        <ModalAlert
          onFinish={handleDelete}
          onCancel={handleCancel}
          title='Are you sure delete this tag?'
          content='You can’t undo this action'
          onOpen={isModalConfirm}
        />
      )}
      {isModalEdit && (
        <PopupTag
          onFinish={handleEdit}
          onInitialValues={dataRows}
          title='Edit Object'
          onCancel={handleCancel}
          onOpen={isModalEdit}
        />
      )}

      <Table
        locale={{
          emptyText: (
            <div className='empty'>
              <img src={nodata} alt='nodata' />
              <h3>No data</h3>
              <ButtonCustom isIcon icon={<IconUnion />}>
                Create new
              </ButtonCustom>
            </div>
          )
        }}
        rowKey='id'
        key='id'
        rowSelection={rowSelection as any}
        columns={columns as any}
        dataSource={dataTag}
        scroll={{ y: 430 }}
        // called when the page number of pageSize changed
        onChange={(pagination, filters, sorter, extra) => {
          console.log('params', pagination)
          // filters, sorter, extra
        }}
        pagination={{
          position: ['bottomRight'],
          pageSize: 10,
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`
          }
        }}
      />
    </div>
  )
}
