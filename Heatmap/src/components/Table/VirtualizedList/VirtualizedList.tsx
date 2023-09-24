import React from 'react'
import { FixedSizeList as List } from 'react-window'

function VirtualizedList() {
  const listArr = new Array(100).fill(0).map((_, index) => index)
  function renderRow({ index, key, style }: any) {
    const item = listArr[index]
    return (
      <div key={key} style={style}>
        item {item.toString()}
      </div>
    )
  }
  return (
    <List className='list' height={300} itemCount={listArr.length} itemSize={35} width={250}>
      {renderRow}
    </List>
  )
}

export default VirtualizedList
