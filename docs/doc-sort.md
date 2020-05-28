---
id: doc-sort
title: Sort
sidebar_label: Sort
---

```javascript
new Table({
  style: "fatBorder", //style of border of the table, (optional)
  columns: [
    { name: "column1", alignment: "left", color: "red" }, //with alignment and color
    { name: "column2", alignment: "right" },
    { name: "column3" },
  ],
  // highlight-next-line
  sort: (row1, row2) => row2.column1 - row1.column1, // sorting order of rows (optional), this is normal js sort function for Array.sort
});
```
