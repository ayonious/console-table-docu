---
id: doc-computed-function
title: Calculated Columns
sidebar_label: Calculated Columns
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sometimes you need a new column added automatically whose val is dependent on other fields in the same row.

```javascript
const { printTable, Table } = require("console-table-printer");

const p = new Table({
  columns: [
    { name: "red_amount", color: "red" },
    { name: "blue_amount", color: "blue" },
  ],
  // highlight-next-line
  computedColumns: [
    // creating new columns based on other column vals
    {
      name: "sum",
      function: (row) => row.red_amount + row.blue_amount,
    },
    {
      name: "red_percent",
      function: (row) => ((row.red_amount / row.sum) * 100).toFixed(2),
    },
    {
      name: "blue_percent",
      function: (row) => ((row.blue_amount / row.sum) * 100).toFixed(2),
    },
  ],
});

// add rows
p.addRows([
  {
    red_amount: 2,
    blue_amount: 3,
  },
  {
    red_amount: 1,
    blue_amount: 1,
  },
  {
    red_amount: 5,
    blue_amount: 6,
  },
]);

// print
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-computed-function/screenshot.png')}/>
