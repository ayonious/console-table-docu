---
id: doc-border-design
title: Border Design
sidebar_label: Border Design
---

```typescript
const p = new Table({
  // highlight-next-line
  style: "fatBorder", //style of border of the table
  columns: [{ name: "index" }, { name: "text" }, { name: "value" }],
});

p.addRow({ index: 1, text: "red wine", value: 10.212 });
p.addRow({ index: 2, text: "green gemuse", value: 20.0 });
p.printTable();
```

![Screenshot](https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/screenshot-fat-border.png)

## thinBorder

![Screenshot](https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/screenshot-thin-border.png)

## Possible values of Border

- thinBorder (default)
- fatBorder
