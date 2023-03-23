import { Button, DatePicker, Form } from 'antd'
import moment from 'moment'
import { memo } from 'react'
import React from 'react'

interface RangePickerType {
  dates: string[] | number[]
  handleChange: (values: any) => void
}
export const RangePicker = ({ dates, handleChange }: RangePickerType) => {
  return (
    <div className='TimeAgo' style={{ margin: '20px' }}>
      <Form
        autoComplete='off'
        wrapperCol={{ span: 14 }}
        onFinish={handleChange}
        // onFinish={onFinish}
        onFinishFailed={(error) => {
          console.log({ error })
        }}
        initialValues={{
          datePicker: [dates[0], dates[1]]
        }}
      >
        <Form.Item wrapperCol={{ span: 14 }} name='RangeDate' label='input timestamp' hasFeedback>
          <DatePicker.RangePicker
            // onChange={handleChange}
            showTime={{ format: 'HH' }}
            format='YYYY-MM-DD HH'
            placeholder={['Start Date', 'End Date']}
            disabledDate={(current) => current && current > moment().endOf('day')}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4 }} style={{ display: 'inline-flex', minWidth: '80px' }}>
          <Button block type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(RangePicker)
