import { ButtonCustom } from 'components/Button'
import { IconDownload } from 'components/Icons'
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'

export const ExcelExport = (excelData: any) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  const fileExtension = '.xlsx'
  const exportToExcel = async () => {
    try {
      const ws = XLSX.utils.json_to_sheet(excelData.excelData)
      const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
      const data = new Blob([excelBuffer], { type: fileType })
      FileSaver.saveAs(data, 'dataReport' + fileExtension)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ButtonCustom isIcon icon={<IconDownload />} onClick={() => exportToExcel()}>
      Get file
    </ButtonCustom>
  )
}
export default ExcelExport
