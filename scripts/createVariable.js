"use strict";

import global from "./global";

export default function createVariable() {
    console.log("Call createVariable");
    const t1 = document.getElementById("t1");
    const value = t1.value;
    t1.value = "";
    if(!value) return;
    if(value === "") return;
    const parrent = document.getElementById("rightBox");
    const box = document.createElement("div");
    const child = parrent.appendChild(box);
    child.className = "movingBoxClass";
    child.innerHTML = `
        <div style = "display: inline-block;">
            <div align = "center" style = "background: #FFFFE0; padding: 12px; width: 50px; font-size: 20px; margin: 0px; border: 1px solid black;">
                <input align = "center" type = "text" class = "field" spellcheck = 'false' autocomplete = 'off' value = "${value}">
            </div>
            <div align = "center" style = "background: #BDB76B; padding: 12px; width: 50px; font-size: 20px; margin: 0px; border: 1px solid black;">
                <input align = "center" type = "text" class = "field" spellcheck = 'false' autocomplete = 'off'>
            </div>
        </div>
    `;
    child.style.left = "100px";
    child.style.top = "50px";
    child.onmousedown = function() {
        global().obj = child;
    }
}
