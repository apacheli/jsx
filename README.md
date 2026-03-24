# @apacheli/jsx

A very fast JSX implementation.

```js
import { render } from "@apacheli/jsx";

console.log(render(Bun.markdown.react("Hello, World!")));
```

## Benchmark

```sh
$ bun bench.js
[223.72ms] preact-render-to-string (renderToStaticMarkup)
[105.28ms] @apacheli/jsx
```

At least **2.12x** faster.

It's probably faster than `react-dom/server`, but their code validator is annoying to debug.
