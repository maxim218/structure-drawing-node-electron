"use strict";

import global from "./global";

export default function boxesEvents() {
    console.log("Call boxesEvents");

    document.onmouseup = function(event) {
        global().obj = undefined;
        global().lineDrawer.dropAll();
        global().lineDrawer.drawFlag = false;
    }

    global().can.onmouseup = function(event) {
        if(global().draw && global().type === 2) {
            global().lineDrawer.initSecond(event.offsetX, event.offsetY);
            global().lineDrawer.drawRectangle();
        }
        global().obj = undefined;
        global().lineDrawer.dropAll();
        global().lineDrawer.drawFlag = false;
    }

    global().can.onmousedown = function(event) {
        if(global().draw) {
            global().lineDrawer.drawFlag = true;
            global().lineDrawer.initFirst(event.offsetX, event.offsetY);
        }
    }

    global().can.onmousemove = function(event) {
        if(global().type === 1) {
            if(global().draw) {
                if(global().lineDrawer.drawFlag) {
                    global().holst.lineWidth = 3;
                    global().lineDrawer.initSecond(event.offsetX, event.offsetY);
                    global().lineDrawer.drawLine();
                    global().lineDrawer.initFirst(event.offsetX, event.offsetY);
                }
            }
        }
        if(global().type === 3) {
            if(global().draw) {
                if(global().lineDrawer.drawFlag) {
                    const xx = parseInt(event.offsetX);
                    const yy = parseInt(event.offsetY);
                    global().holst.clearRect(xx - 20, yy - 20, 40, 40);
                }
            }
        }
    }

    document.getElementById("rightBox").onmousemove = function(event) {
        if(global().move) {
            if(global().obj) {
                let xObj = parseInt(global().obj.style.left);
                let yObj = parseInt(global().obj.style.top);
                if(!xObj) xObj = 0;
                if(!yObj) yObj = 0;
                const mouseX = parseInt(event.pageX) - 250;
                const mouseY = parseInt(event.pageY);
                const resX = xObj + (mouseX - xObj);
                const resY = yObj + (mouseY - yObj);
                global().obj.style.left = resX + "px";
                global().obj.style.top = resY + "px";
            }
        }
    }
}
