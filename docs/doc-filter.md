---
id: doc-filter
title: Filter
sidebar_label: Filter
---

```javascript
const table = new Table({
  columns: [{ name: "column1" }, { name: "column2" }, { name: "column3" }],
  filter: (row) => row.column1 < 3, // filtering rows (optional)
});

table.addRows

```
