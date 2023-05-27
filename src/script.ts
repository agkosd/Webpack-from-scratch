import "./style.css";
import mushroom1 from './assets/saxon-white-x4TCvIEGuHs-unsplash.jpg';
import mushroom2 from './assets/ck-yeo-ZyEnQoFp8RQ-unsplash.jpg';
import join from "lodash/join";
import { funcA } from "./tree-shaking";

funcA();

function testComponent(): HTMLDivElement {
    const el = document.createElement('div')
    el.innerHTML = join(['Hello', 'There'], " ");
    return el;
}

function imageComponent(src: string): HTMLImageElement {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    return imgEl;
}

function btnComponent(): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.innerText = "Click Me!";
    btn.addEventListener('click', () => {
        import("./lazy-loading").then(async (module) => {
            const getData = module.default;
            console.log(await getData());
        })
    })
    return btn;
}

document.body.appendChild(testComponent());
document.body.appendChild(imageComponent(mushroom1));
document.body.appendChild(imageComponent(mushroom2));
document.body.appendChild(btnComponent());