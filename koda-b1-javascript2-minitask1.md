## Flowchart JavaScript 2 Minitask 1

### Flowchart Max
```mermaid
flowchart TD
  start((Start))
  a[/"a = [12, 8, 37]"/]
  b[/"b = [50, 43, 2]"/]
  c[/"c = [...a, ...b]"/]
  maxInit["min = f[0]"]
  init[i = 0]
  for{i < c.length}
  if{"max < c[i]"}
  max["max = c[i]"]
  inc[i++]
  out[/Tampilkan max/]
  finish(((End)))

  start --> a --> b --> c --> maxInit --> init --> for -- YA --> if
  for -- TIDAK --> out
  if -- YA --> max
  if -- TIDAK --> inc
  max --> inc
  inc --> for

  out --> finish
```

### Flowchart Min
```mermaid
flowchart TD
  start((Start))
  d[/"d = [1, 3, 6]"/]
  e[/"e = [9, 2, 7]"/]
  f[/"f = [...d, ...e]"/]
  minInit["min = f[0]"]
  init[i = 0]
  for{i < f.length}
  if{"min > f[i]"}
  min["min = f[i]"]
  inc[i++]
  out[/Tampilkan min/]
  finish(((End)))

  start --> d --> e --> f --> minInit --> init --> for -- YA --> if
  for -- TIDAK --> out
  if -- YA --> min
  if -- TIDAK --> inc
  min --> inc
  inc --> for

  out --> finish
```

### Flowchart Average
```mermaid
flowchart TD
  start((Start))
  data1["data1 = [3, 5, 1, 6, 8]"]
  data2["data2 = [2, 9, 7, 2, 4]"]
  data["data = [...data1, ...data2]"]
  avgInit[avg = 0]
  init[i = 0]
  for{i < data.length}
  avg["avg += data[i]"]
  inc[i++]
  out[/Tampilkan hasil average/]
  finish(((End)))

  start --> data1 --> data2 --> data --> avgInit --> init --> for
  for -- YA --> avg
  for -- TIDAK --> out
  avg --> inc --> for

  out --> finish
```