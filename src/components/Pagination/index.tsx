import { Pagination, PaginationProps } from 'antd'
import clsx from 'clsx'

interface PageType extends PaginationProps {
  // className?: string
  // pageSize?: number
  // current?: number
  // total?: number
  // onChange?: (page: number, pageSize: number) => void
}
export function Page({ className, pageSize = 10, current, total, onChange, ...rest }: PageType) {
  const _onChange = (page: number, pageSize: number) => {
    onChange?.(page, pageSize)
  }
  return (
    <div className='antCustom'>
      <Pagination
        className={clsx('pagination', className)}
        pageSize={pageSize}
        current={current}
        total={total}
        onChange={_onChange}
        {...rest}
      />
    </div>
  )
}

export default Page
