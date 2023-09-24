# Optimize Performance

## What is React Virtualized?

React Virtualized is a React library used to efficiently render large lists of data in web applications. The library optimizes performance by only rendering the portions of the list that are currently visible to the user, rather than rendering all of the items in the list.

- React Virtualized provides components such as List, Table, Grid, and Collection to help build efficient user interfaces with large data lists. The library uses the technique of virtual scrolling to display data incrementally, thereby speeding up page load times and improving user experience.

- React Virtualized has many features, including support for dynamically-sized lists, support for asynchronous data, customizing the height of list items, creating text summaries, and more.

## How to use React Virtualized?

I worked with 3 npm packages: react-virtualized, react-window, and virtualizedtableforantd4 just for Ant deign 4. I will explain how to use them in this article.

### react-virtualized and react-window

React-virtualized and react-window are both React libraries used for efficient rendering of large data lists in web applications. Both libraries use the concept of virtual scrolling to improve performance by only rendering the portions of the list that are currently visible to the user.

> These 2 libraries are written by the same author

React-virtualized is an older library that has been around since 2015, whereas react-window is a newer library that was released in 2018. it's also provides advanced features such as dynamic list height, column and row resizing, infinite loading, and server-side rendering.

React-window, on the other hand, provides only a few components such as FixedSizeList, VariableSizeList, FixedSizeGrid, and VariableSizeGrid. This makes it a more lightweight library, suitable for simple use cases where a smaller bundle size is desired.

> Both react-virtualized and react-window are actively maintained and offer similar performance gains, so the choice between them ultimately comes down to personal preference and the specific requirements of the project.

And now, let's see how to use them.

- Install virtualizedtableforantd4

```bash
npm i react-virtualized
npm install --save @types/react-virtualized
npm i react-window
```

or you can use yarn. Now, it's have typescript support for react-virtualized should be installed @types/react-virtualized

```bash
yarn add react-virtualized
yarn add @types/react-virtualized

```

and now, i will show you how to use react-virtualized and react-window

```jsx
import { List, ListProps } from 'react-virtualized'

const VirtualizedList: React.FC<ListProps> = ({
  width,
  height,
  rowCount,
  rowHeight,
  rowRenderer,
  ...rest
}: ListProps) => {
  return (
    <List rowCount={rowCount} rowHeight={rowHeight} width={width} height={height} rowRenderer={rowRenderer} {...rest} />
    // but you can use FixedSizeList of react-window instead of List. It's the same
    // and when i use, "List" of react-virtualized, it's not working. So i use FixedSizeList and it worked for me =)))))
  )
}
export default VirtualizedList
```

### virtualizedtableforantd4

- Install virtualizedtableforantd4

```bash
npm i --save virtualizedtableforantd4
```

or you can use yarn

```bash
yarn add virtualizedtableforantd4
```

and now, i will show you how to use virtualizedtableforantd4

- Quick start

> You need to change your style like following if your Table.size is not default.

```css
// size={'small'}
ant-table [vt] > table > .ant-table-tbody > tr > td {
  padding: 8px;
}
```

```jsx
import { virtualizedtableforantd4 } from 'virtualizedtableforantd4'
import React from 'react';
import { Table } from 'antd';
import { useVT } from 'virtualizedtableforantd4';

const [ vt, set_components ] = useVT(() => ({ scroll: { y: 600 } }), []);

<Table
  scroll={{ y: 600 }} // It's important for using VT!!! DO NOT FORGET!!!
  // and you can custom your scroll here to fit your need of your table
  components={vt}
  columns={/*your columns*/}
  dataSource={/*your data*/}
/>
```

### Documentation

- [react-virtualized](https://www.npmjs.com/package/react-virtualized 'react-virtualized')
- [react-window](https://www.npmjs.com/package/react-window 'react-window')
- [virtualizedtableforantd4](https://www.npmjs.com/package/virtualizedtableforantd4 'virtualizedtableforantd4')
