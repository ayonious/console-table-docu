---
id: doc-color
title: Coloring
sidebar_label: Coloring
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Coloring

You can put color as either entire Row or entire column

```jsx
const p = new Table({
  columns: [
    // highlight-next-line
    { name: "index", alignment: "left", color: "blue" },
    { name: "text", alignment: "right" },
  ],
});

p.addRow({ index: 1, text: "red wine", value: 10.212 }, { color: "green" }); // row coloring

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

<img alt="Screenshot" src={useBaseUrl('img/examples/screenshot-colored.png')}/>

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
