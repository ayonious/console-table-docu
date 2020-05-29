---
id: doc-sort
title: Sort
sidebar_label: Sort
---

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  // highlight-next-line
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional),
});

table.addRows;
```
