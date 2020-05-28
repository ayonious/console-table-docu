---
id: doc-typescript
title: Typescript
sidebar_label: Typescript
---

Still developing this guide..

You can easily import these in typescript. All basic functions Table and printTable are typed

```typescript
// highlight-next-line
import { printTable, Table } from "console-table-printer";

const testCases = [
  { index: 3, text: "I would like some gelb bananen bitte", value: 100 },
  { index: 4, text: "I hope batch update is working", value: 300 },
];

// print
printTable(testCases);

const p = new Table();
p.addRow({ index: 1, text: "red wine", value: 10.212 }, { color: "red" });
p.addRow({ index: 2, text: "green gemuse", value: 20.0 }, { color: "green" });
p.addRow({ index: 3, text: "gelb bananen", value: 100 }, { color: "yellow" });
p.addRow({ index: 3, text: "rosa hemd", value: 100 }, { color: "cyan" });
// print
p.printTable();
```
