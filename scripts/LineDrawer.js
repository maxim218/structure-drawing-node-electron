"use strict";

import global from "./global";

export default class LineDrawer {
    constructor() {
        console.log("Object LineDrawer created");
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.drawFlag = false;
    }

    initFirst(x1, y1) {
        this.x1 = parseInt(x1);
        this.y1 = parseInt(y1);
    }

    initSecond(x2, y2) {
        this.x2 = parseInt(x2);
        this.y2 = parseInt(y2);
    }

    dropAll() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    drawLine() {
        const holst = global().holst;
        holst.beginPath();
        holst.moveTo(this.x1, this.y1);
        holst.lineTo(this.x2, this.y2);
        holst.closePath();
        holst.stroke();
    }

    drawLineHelp(x1, y1, x2, y2) {
        const holst = global().holst;
        holst.beginPath();
        holst.moveTo(x1, y1);
        holst.lineTo(x2, y2);
        holst.closePath();
        holst.stroke();
    }

    drawRectangle() {
        this.drawLineHelp(this.x1, this.y1, this.x2, this.y1);
        this.drawLineHelp(this.x1, this.y2, this.x2, this.y2);
        this.drawLineHelp(this.x1, this.y1, this.x1, this.y2);
        this.drawLineHelp(this.x2, this.y1, this.x2, this.y2);
    }
}
