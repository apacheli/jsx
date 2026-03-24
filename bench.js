import { renderToStaticMarkup } from "preact-render-to-string";
import { jsx as reactJsx } from "react/jsx-runtime";
import { renderToStaticMarkup as reactRenderToStaticMarkup } from "react-dom/server";
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

const User2 = (user) => {
    return reactJsx("div", {
        children: [
            reactJsx("h1", { children: user.name }, "1"),
            reactJsx("p", { children: user.bio }, "2"),
        ],
    });
};

const data = Array.from({ length: 10 }, () => User(mock));
const data2 = Array.from({ length: 10 }, () => User2(mock));

// Warming up
for (let i = 0; i < 10_000; i++) {
    renderToStaticMarkup(data);
    reactRenderToStaticMarkup(data2);
    render(data);
}

console.time("preact-render-to-string (renderToStaticMarkup)");
for (let i = 0; i < 10_000; i++) {
    renderToStaticMarkup(data);
}
console.timeEnd("preact-render-to-string (renderToStaticMarkup)");

console.time("react-dom/server (renderToStaticMarkup)");
for (let i = 0; i < 10_000; i++) {
    reactRenderToStaticMarkup(data2);
}
console.timeEnd("react-dom/server (renderToStaticMarkup)");

console.time("@apacheli/jsx");
for (let i = 0; i < 10_000; i++) {
    render(data);
}
console.timeEnd("@apacheli/jsx");
