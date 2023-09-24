import { DatePicker } from 'antd'
import moment from 'moment'
import { memo } from 'react'

interface DayPickerType {
  handleChange: () => void
  date: string
}
const DayPicker = ({ handleChange, date }: DayPickerType) => {
  return (
    <>
      <DatePicker
        onChange={handleChange}
        format='YYYY-MM-DD'
        placeholder={'Select Date'}
        disabledDate={(current) => current && current > moment().endOf('day')}
      />
      <p
        style={{
          color: 'yellow',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        {date}
      </p>
    </>
  )
}
export default memo(DayPicker)
