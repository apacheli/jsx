import { render } from "./jsx-runtime.js";

console.log(render(<p className="a" htmlFor="b">Hello, World!</p>));

console.log(render(<link>https://www.rssboard.org/</link>));

console.log(render(Bun.markdown.react("Hello, World!")));
