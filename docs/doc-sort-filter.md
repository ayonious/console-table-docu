---
id: doc-sort-filter
title: Sort and Filter
sidebar_label: Sort and Filter
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Sort

This is an optional param. Pass the sort function that will be used on each row to sort them

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  // highlight-next-line
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional),
});

table.addRows;
```

## Filter

This is an optional param. Pass the filter function that will be used on each row to filter them

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  // highlight-next-line
  filter: (row) => row.column1 < 3, // filtering rows (optional)
});

table.addRows;
```
