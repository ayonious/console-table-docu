---
id: doc-table-instance-creation
title: Create Table Instance
sidebar_label: Create Table Instance
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can also create a new Table instance and print it like this

```javascript
const { Table } = require("console-table-printer");

//Create a table
const p = new Table();

//add rows with color
p.addRow(
  { "LineNr.": 1, text: "red wine please", value: 10.212 },
  { color: "red" }
);
p.addRow(
  { "LineNr.": 2, text: "green gemuse please", value: 20.0 },
  { color: "green" }
);
p.addRows([
  //adding multiple rows are possible
  { "LineNr.": 3, text: "gelb bananen bitte", value: 100 },
  { "LineNr.": 4, text: "update is working", value: 300 },
]);

//print
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-table-instance-creation/screenshot-1.png')}/>

## Table instance creation

There are 3 ways for Table Instance creation

### 1. Simplest way

```javascript
new Table();
```

### 2. Only with column names

```javascript
new Table(["column1", "column2", "column3"]);
```

### 3. More Complex way

```javascript
new Table({
  style: "fatBorder", //style of border of the table, (optional)
  columns: [
    { name: "column1", alignment: "left", color: "red" }, //with alignment and color
    { name: "column2", alignment: "right" },
    { name: "column3" },
  ],
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional)
  filter: (row) => row.column1 < 3, // filtering rows (optional)
});
```


```js
new Table({
  title: 'Title of the Table', // A text showsup on top of table (optoinal)
  columns: [
    { name: 'column1', alignment: 'left', color: 'red' }, // with alignment and color
    { name: 'column2', alignment: 'right', maxLen: 30 }, // lines bigger than this will be splitted in multiple lines
    { name: 'column3', title: 'Column3' }, // Title is what will be shown while printing, by default title = name
  ],
  rows: [{ column1: 'row1' }, { column2: 'row2' }, { column3: 'row3' }],
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional), this is normal js sort function for Array.sort
  filter: (row) => row.column1 < 3, // filtering rows (optional)
  enabledColumns: ['column1'], // array of columns that you want to see, all other will be ignored (optional)
  disabledColumns: ['column2'], // array of columns that you DONT want to see, these will always be hidden
  colorMap: {
    custom_green: '\x1b[32m', // define customized color
  },
  charLength: {
    '👋': 2,
    '😅': 2,
  }, // custom len of chars in console
  defaultColumnOptions: {
    alignment: 'center',
    color: 'red',
    maxLen: 40,
    minLen: 20,
  },
});
```

## Functions of table instance

- `addRow(rowObjet, options)` adding single row.
- `addRows(rowObjects, options)` adding multiple rows. array of row object. This case options will be applied to all the objects in row
- `addColumn(columnObject)` adding single column
- `addColumns(columnObjects)` adding multiple columns
- `printTable()` Prints the table on your console
