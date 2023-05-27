import join from "lodash/join";

console.log("loading page 2");

const el = document.createElement("h1");
el.innerHTML = join(["Hello", "welcome to", "page 2"], " ");

document.body.append(el);