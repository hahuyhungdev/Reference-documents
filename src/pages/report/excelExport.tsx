import { ButtonCustom } from 'components/Button'
import { IconDownload } from 'components/Icons'
import { exportToExcel } from 'pages/devices/devices.slice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'reduxStore'
import * as xlsx from 'xlsx'

interface ExcelExportProps {
  startDate: number
  endDate: number
  name: string
}
export const ExcelExport = ({ startDate, endDate, name }: ExcelExportProps) => {
  const deivcesExport = useSelector((state: RootState) => state.devices.deivcesListExport)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (startDate && endDate && name) {
      const promise = dispatch(
        exportToExcel({
          start: startDate,
          end: endDate,
          name
        })
      )
      return () => {
        promise.abort()
      }
    }
  }, [dispatch, startDate, endDate, name])
  console.log(startDate, endDate, name)
  const downloadExcel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    const workbook = xlsx.utils.book_new()
    const worksheet = xlsx.utils.aoa_to_sheet(deivcesExport)
    xlsx.utils.book_append_sheet(workbook, worksheet, 'location')
    xlsx.writeFile(workbook, 'Location_Log.xlsx')
  }
  return (
    <ButtonCustom isIcon icon={<IconDownload />} onClick={downloadExcel}>
      Get file
    </ButtonCustom>
  )
}
export default ExcelExport
