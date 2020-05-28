---
id: doc-filter
title: Filter
sidebar_label: Filter
---

```javascript
new Table({
  style: "fatBorder", //style of border of the table, (optional)
  columns: [
    { name: "column1", alignment: "left", color: "red" }, //with alignment and color
    { name: "column2", alignment: "right" },
    { name: "column3" },
  ],
  // ...
  // highlight-start
  filter: (row) => row.column1 < 3, // filtering rows (optional)
  // highlight-end
  // ...
});
```
