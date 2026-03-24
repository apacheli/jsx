# @apacheli/jsx

A very fast JSX implementation for server-side rendering (SSR).

```js
import { render } from "@apacheli/jsx";

console.log(render(<p>Hello, World!</p>));

console.log(render(Bun.markdown.react("Hello, World!")));
```

## Benchmark

```sh
$ bun bench.js
[223.72ms] preact-render-to-string (renderToStaticMarkup)
[105.28ms] @apacheli/jsx
```

At least **2.12x** faster.

It's probably faster than `react-dom/server`, but their code validator is too annoying to debug.

> [!WARNING]
> This library is designed ONLY for performance. It is not drop-in replacement for React/Preact.

## How to Use

Install using Bun:

```sh
$ bun install https://github.com/apacheli/jsx
```

Add to `tsconfig.json`:

```json
{
    "compilerOptions": {
        "jsxImportSource": "@apacheli/jsx"
    }
}
```
