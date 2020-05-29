---
id: doc-sort-filter
title: Sort and Filter
sidebar_label: Sort and Filter
---

## Sort

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  // highlight-next-line
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional),
});

table.addRows;
```

## Filter

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  // highlight-next-line
  filter: (row) => row.column1 < 3, // filtering rows (optional)
});

table.addRows;
```
