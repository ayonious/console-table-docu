---
id: doc-adding-rows
title: Adding Rows
sidebar_label: Adding Rows
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Adding Rows

### One row at a time

```js
const { Table } = require("console-table-printer");

const p = new Table();

// highlight-next-line
p.addRow({ index: 1, text: "red wine", value: 10.212 }); // Single row at a time
p.addRow({ index: 2, text: "green gemuse", value: 20.0 });
p.addRow({ index: 3, text: "gelb bananen", value: 100, is_priority_today: "Y" });
p.addRow({ index: 3, text: "rosa hemd wie immer", value: 100 });
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-adding-rows/screenshot-single-row.png')}/>

## Batch Row Adding

```javascript
const { Table } = require("console-table-printer");

const p = new Table();

p.addRows(
  [
    // adding multiple rows are possible
    { index: 3, text: "green color text1", value: 100 },
    { index: 4, text: "green color text2", value: 300 },
  ],
);
p.printTable();
```

## Chained Row adding

Adding row function can be chained

```javascript
const { Table } = require("console-table-printer");

const p = new Table();

// highlight-next-line
p.addRow({ index: 1, text: "red wine", value: 10.212 })
.addRow({ index: 2, text: "green gemuse", value: 20.0 })
.addRow({ index: 3, text: "gelb bananen", value: 100, is_priority_today: "Y" })
.addRow({ index: 3, text: "rosa hemd wie immer", value: 100 });
p.printTable();
```
