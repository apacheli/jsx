const escapeHTML = globalThis.Bun.escapeHTML;
const isArray = globalThis.Array.isArray;

// const Element = Symbol.for("react.element");
const Fragment = Symbol.for("react.fragment");

const jsx = (type, props) => {
    return {
        type,
        props,
        // __proto__: null, // https://github.com/preactjs/preact-render-to-string/blob/main/src/index.js#L299
        // $$typeof: Element,
    };
};

const render = (element) => {
    switch (typeof element) {
        case "undefined": {
            return "";
        }

        case "object": {
            if (element === null) {
                return "";
            }
            if (isArray(element)) {
                let s = "";
                for (let i = 0, j = element.length; i < j; i++) {
                    s += render(element[i]);
                }
                return s;
            }
            switch (typeof element.type) {
                case "function": {
                    return render(element.type(element.props));
                }

                case "string": {
                    let attributes = "";
                    for (const prop in element.props) {
                        switch (prop) {
                            case "children": {
                                continue;
                            }
                        }
                        const value = element.props[prop];
                        if (value === null || value === false) {
                            continue;
                        }
                        // React compatibility because their code is weird
                        let name = prop;
                        switch (name) {
                            case "className": {
                                name = "class";
                                break;
                            }

                            case "htmlFor": {
                                name = "for";
                                break;
                            }
                        }
                        attributes += ` ${name}${value === true ? "" : `="${escapeHTML(`${value}`)}"`}`;
                        break;
                    }
                    // https://developer.mozilla.org/en-US/docs/Glossary/Void_element
                    switch (element.type) {
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "link":
                        case "meta":
                        case "source":
                        case "track":
                        case "wbr": {
                            return `<${element.type}${attributes}>`;
                        }

                        default: {
                            return `<${element.type}${attributes}>${render(element.props.children)}</${element.type}>`;
                        }
                    }
                }

                case "symbol": {
                    switch (element.type) {
                        case Fragment: {
                            return render(element.props.children);
                        }
                    }
                    break;
                }
            }
        }

        case "string": {
            return escapeHTML(element);
        }

        default: {
            return `${element}`;
        }
    }
};

export {
    // Element,
    Fragment,
    jsx,
    jsx as jsxs,
    jsx as jsxDEV,
    render,
};
