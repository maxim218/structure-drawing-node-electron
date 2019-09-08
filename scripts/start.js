"use strict";

import addEvents from "./addEvents";

window.onload = function() {
    console.log("Window load OK");
    const can = document.getElementById("can");
    const holst = can.getContext("2d");
    addEvents(can, holst);
}
