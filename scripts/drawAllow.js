"use strict";

import global from "./global";

export default function drawAllow() {
    console.log("Call drawAllow");
    const sssBad = `Рисование <span style = "color: red;">запрещено</span>`;
    const sssGood = `Рисование <span style = "color: green;">разрешено</span>`;
    global().draw = !global().draw;
    if(global().draw) document.getElementById('t4').innerHTML = sssGood;
    if(!global().draw) document.getElementById('t4').innerHTML = sssBad;
}
