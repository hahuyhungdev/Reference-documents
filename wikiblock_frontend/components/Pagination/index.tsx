import { Pagination, PaginationProps } from 'antd';
import React from 'react';

interface Props {
  pageSize?: number;
  current?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

function Page({ pageSize = 10, current, total, onChange }: Props) {
  const _onChange: PaginationProps['onChange'] = (page, pageSize) => {
    onChange?.(page, pageSize);
  };
  return <Pagination pageSize={pageSize} current={current} total={total} onChange={_onChange} />;
}
export default Page;
