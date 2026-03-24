import { renderToStaticMarkup } from "preact-render-to-string";
import { render } from "./jsx-runtime.js";

const mock = { name: "Johnny Johnson", bio: "Hi I am Johnny" };

const User = (user) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        </div>
    );
};

const data = Array.from({ length: 100 }, () => User(mock));

// Warming up
for (let i = 0; i < 10_000; i++) {
    renderToStaticMarkup(data);
    render(data);
}

console.time("preact-render-to-string (renderToStaticMarkup)");
for (let i = 0; i < 10_000; i++) {
    renderToStaticMarkup(data);
}
console.timeEnd("preact-render-to-string (renderToStaticMarkup)");

console.time("@apacheli/jsx");
for (let i = 0; i < 10_000; i++) {
    render(data);
}
console.timeEnd("@apacheli/jsx");
