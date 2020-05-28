---
id: doc-color
title: Coloring
sidebar_label: Coloring
---

## Coloring

You can put color as either entire Row or entire column

```jsx {3}
const p = new Table({
  columns: [
    // highlight-next-line
    { name: "index", alignment: "left", color: "blue" }, //Column coloring
    { name: "text", alignment: "right" },
  ],
});

// highlight-start
p.addRow({ index: 1, text: "red wine", value: 10.212 }, { color: "green" }); // row coloring
// highlight-end

p.addRow({ index: 2, text: "green gemuse", value: 20.0 });
p.addRow(
  { index: 3, text: "gelb bananen", value: 100, is_priority_today: "Y" },
  { color: "yellow" }
);
p.addRow(
  { index: 3, text: "rosa hemd wie immer", value: 100 },
  { color: "cyan" }
);
p.printTable();
```

![Screenshot](https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/screenshot-thin-border-column-props.2.png)

## possible `color` values for rows/columns

- red
- green
- yellow
- white
- blue
- magenta
- cyan
- crimson
- white_bold
