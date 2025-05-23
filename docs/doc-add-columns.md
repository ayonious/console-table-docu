---
id: doc-add-columns
title: Adding Columns
sidebar_label: Adding Columns
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### Adding a Single Column

```javascript
const { Table } = require("console-table-printer");

const p = new Table({
  columns: [{ name: "Serial", alignment: "left" }],
});

// highlight-next-line
p.addColumn({ name: "Name", alignment: "center" }); // Adding a single column
p.addColumn({ name: "Price", alignment: "right" });
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-add-columns/screenshot-single-column-1.png')}/>

## Adding Multiple Columns

```javascript
const { Table } = require("console-table-printer");

const p = new Table();

p.addColumns([
  // adding multiple columns
  { name: "Item", alignment: "left" },
  { name: "Description", alignment: "center" },
]);
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-add-columns/screenshot-multiple-columns-1.png')}/>

## Chained Column Adding

Adding column function can be chained

```javascript
const { Table } = require("console-table-printer");

const p = new Table();

// highlight-next-line
p.addColumn({ name: "Weight", alignment: "left" })
  .addColumn({ name: "Color", alignment: "center" })
  .addColumn({ name: "Price", alignment: "right" });
p.printTable();
``` 