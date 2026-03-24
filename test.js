import { render } from "./jsx-runtime.js";

console.log(render(<p>Hello, World!</p>));

console.log(render(Bun.markdown.react("Hello, World!")));
