"use strict";

import global from "./global";

export default function createArray() {
    console.log("Call createArray");
    const t2 = document.getElementById("t2");
    let value = t2.value;
    t2.value = "";
    value = parseInt(value);
    if(!value) return;
    if(value === 0) return;
    if(value < 0) return;
    const parrent = document.getElementById("rightBox");
    const box = document.createElement("div");
    const child = parrent.appendChild(box);
    child.className = "movingBoxClass";
    child.style.display = "inline-block";
    let s = "";
    for(let i = 0; i < value; i++) {
        s += `
            <div style = "display: inline-block;">
                <div align = "center" style = "background: #FFFFE0; padding: 12px; width: 50px; font-size: 20px; margin: 0px; border: 1px solid black;">
                    <input align = "center" type = "text" class = "field" spellcheck = 'false' autocomplete = 'off' value = '${i}'>
                </div>
                <div align = "center" style = "background: #BDB76B; padding: 12px; width: 50px; font-size: 20px; margin: 0px; border: 1px solid black;">
                    <input align = "center" type = "text" class = "field" spellcheck = 'false' autocomplete = 'off'>
                </div>
            </div>
        `;
    }
    child.innerHTML = s;
    child.style.left = "100px";
    child.style.top = "50px";
    child.onmousedown = function() {
        global().obj = child;
    }
}
