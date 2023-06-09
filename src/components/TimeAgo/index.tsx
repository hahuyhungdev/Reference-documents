import { Button, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import React from 'react'

export const TimeAgo = () => {
  const [inputTimestamp, setInputTimestamp] = React.useState(moment().unix())
  const [inputDate, setInputDate] = React.useState(moment().format('YYYY-MM-DD HH'))

  // console.log("compare", inputDate);
  // convert timestamp to format date
  const ConvertTimestamp = moment.unix(inputTimestamp).format('YYYY-MM-DD HH-mm')

  // convert date to timestamp
  const convertDateToTimestamp = moment(inputDate, 'YYYY-MM-DD HH').unix()
  // console.log("convertDateToTimestamp", convertDateToTimestamp);
  //Relative
  const Relative = moment.unix(convertDateToTimestamp).fromNow()
  const onFinish = (values: any) => {
    console.log('values', values)
    setInputTimestamp(values.timestamp)
    if (values.datePicker) {
      setInputDate(values.datePicker.format('YYYY-MM-DD HH'))
    }
  }
  console.log('inputTimestamp', inputTimestamp)
  // convert timestamp to format date to inputTimestamp

  return (
    <div className='TimeAgo' style={{ margin: '20px' }}>
      <Form
        autoComplete='off'
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        onFinishFailed={(error) => {
          console.log({ error })
        }}
        initialValues={{
          timestamp: inputTimestamp,
          // datePicker: moment(inputDate, "YYYY,MM,DD HH:mm"),
          datePicker: ''
        }}
      >
        <Form.Item wrapperCol={{ span: 14 }} name='timestamp' label='input timestamp' hasFeedback>
          <Input placeholder='input timestamp' />
        </Form.Item>

        <h3>This Time:{ConvertTimestamp}</h3>
        <Form.Item name='datePicker' label='input datePicker' hasFeedback>
          <DatePicker showTime={{ format: 'HH:mm' }} format='YYYY-MM-DD HH' placeholder='Select Time' />
        </Form.Item>

        <h3>This timestamp:{convertDateToTimestamp}</h3>
        <h3> it was ago: {Relative}</h3>
        <Form.Item wrapperCol={{ span: 4 }} style={{ display: 'inline-flex', minWidth: '80px' }}>
          <Button block type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default TimeAgo
