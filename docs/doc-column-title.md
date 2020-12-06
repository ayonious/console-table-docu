---
id: doc-column-title
title: Column Title
sidebar_label: Column Title
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can choose to have your own Column Title instead of using the ugly name of the Column. A good example is this.

```javascript
const p = new Table({
  columns: [
    {
      name: "red_left_align_index",
      alignment: "left",
      // highlight-next-line
      title: chalk.red("Red Left Align Index"), // using you own Design and coloring function on Title
    },
    {
      name: "right_align_text",
      alignment: "right",
      // highlight-next-line
      title: "Right Align Text",
    },
    {
      name: "green_value_center",
      alignment: "center",
      // highlight-next-line
      title: chalk.yellowBright("Big Green Value Center"),
    },
  ],
});

// add rows with color
p.addRow(
  {
    red_left_align_index: 2,
    right_align_text: "This row is blue",
    green_value_center: 10.212,
  },
  { color: "blue" }
);
p.addRow(
  {
    red_left_align_index: 3,
    right_align_text: "I would like some red wine please",
    green_value_center: 10.212,
  },
  { color: "red" }
);

p.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-column-title/screenshot.png')}/>
