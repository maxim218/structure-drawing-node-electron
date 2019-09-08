"use strict";

import global from "./global";

export default function moveAllow() {
    console.log("Call moveAllow");
    const stringTrue = `Перемещение <span style = "color: green">разрешено</span>`;
    const stringFalse = `Перемещение <span style = "color: red">запрещено</span>`;
    global().move = !global().move;
    if(global().move) document.getElementById("t3").innerHTML = stringTrue;
    if(!global().move) document.getElementById("t3").innerHTML = stringFalse;
}
