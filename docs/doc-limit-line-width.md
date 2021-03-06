---
id: doc-limit-line-width
title: Limit Column Width
sidebar_label: Limit Column Width
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default all lines are printed in single line. But in case you want to put fixed width of column you can mention it in the column props "maxLen"

```javascript
const { Table } = require("console-table-printer");

const p = new Table({
  columns: [
    { name: "red_left_align_index", alignment: "left", color: "red" },
    // highlight-next-line
    { name: "right_align_text", alignment: "right", maxLen: 10 },
    { name: "green", alignment: "center", color: "green" },
  ],
});

// add rows with color
p.addRow(
  {
    red_left_align_index: 2,
    right_align_text: "This row is blue",
    green: 10.212,
  },
  { color: "blue" }
);
p.addRow(
  {
    red_left_align_index: 3,
    right_align_text: "I would like some red wine please",
    green: 10.212,
  },
  { color: "red" }
);
p.addRow(
  {
    red_left_align_index: 4,
    right_align_text: "I would like some cyan wine please",
    green: 10.212,
  },
  { color: "cyan" }
);
p.addRow(
  {
    red_left_align_index: 5,
    right_align_text: "I would like some white_bold wine please",
    green: 10.212,
  },
  { color: "white_bold" }
);
p.addRow(
  {
    red_left_align_index: 6,
    right_align_text: "I would like some crimson sky please",
    green: 10.212,
  },
  { color: "crimson" }
);
p.addRow(
  {
    red_left_align_index: 7,
    right_align_text: "I would like some green gemuse please",
    green: 20.0,
  },
  { color: "green" }
);
p.addRow(
  {
    red_left_align_index: 8,
    right_align_text: "I would like some gelb bananen bitte",
    green: 100,
  },
  { color: "yellow" }
);

// print
p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-limit-line-width/screenshot.png')}/>
