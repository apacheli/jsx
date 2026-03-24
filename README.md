# @apacheli/jsx

A very fast JSX implementation for server-side rendering (SSR).

```js
import { render } from "@apacheli/jsx";

console.log(render(<p>Hello, World!</p>));

console.log(render(Bun.markdown.react("Hello, World!")));
```

## Benchmark

```sh
$ bun bench
[24.37ms] preact-render-to-string (renderToStaticMarkup)
[247.15ms] react-dom/server (renderToStaticMarkup)
[11.41ms] @apacheli/jsx
```

At least **2.12x** faster than Preact and **20x** than React.

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
