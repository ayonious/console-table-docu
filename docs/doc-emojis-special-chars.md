---
id: doc-emojis-special-chars
title: Special Chars and emojis
sidebar_label: Special Chars and emojis
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Special chars

Special chars might have different length of chars in your console. For that if you want to declare yourself the length of the character then you should use charLength option.

```javascript
import { Table } from "console-table-printer";
const bundle = new Table({
  title: "My Table",
  charLength: { "👍": 2, "✅": 2 },
});

bundle.addRows([
  {
    Col1: "👍",
    Column2: "✅",
    SomeOtherCol: "Some Random string",
    SomeOtherCol2: "123_sdas",
  },
]);

bundle.printTable();
```

<img alt="Screenshot" src={useBaseUrl('img/examples/doc-emojis-special-chars/screenshot.png')}/>
