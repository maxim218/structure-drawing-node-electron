"use strict";

import createVariable from "./createVariable";
import createArray from "./createArray";
import boxesEvents from "./boxesEvents";
import moveAllow from "./moveAllow";
import drawAllow from "./drawAllow";
import global from "./global";

function getElement(id) {
    return document.getElementById(id.toString());
}

export default function addEvents(can, holst) {
    console.log("Call addEvents");

    const {webFrame} = require('electron');

    function setWindowZoom(value) {
        webFrame.setZoomFactor(value);
    }

    setWindowZoom(1);

    getElement("rangeElement").oninput = function() {
        const s = getElement("rangeElement").value;
        const n = parseInt(s) / 100;
        setWindowZoom(n);
        console.log("N: " + n);
    };

    const leftBox = getElement("leftBox");
    leftBox.style.top = "0px";

    document.onmousewheel = (event) => {
        const speed = 30;
        const deltaY = parseInt(event.deltaY);
        if(deltaY > 0) {
            leftBox.style.top = (parseInt(leftBox.style.top) + speed) + "px";
        } else {
            leftBox.style.top = (parseInt(leftBox.style.top) - speed) + "px";
        }
        console.log(leftBox.style.top);
    };

    holst.clearRect(0, 0, 3500, 3500);
    global().holst = holst;
    global().can = can;
    global().holst.strokeStyle = "#000000";
    global().holst.lineWidth = 3;
    global().color = "#000000";

    boxesEvents();

    getElement("b1").onclick = createVariable;
    getElement("b2").onclick = createArray;
    getElement("b3").onclick = moveAllow;
    getElement("b4").onclick = drawAllow;

    const colorArr = document.getElementsByClassName("colorElementClass");
    for(let i = 0; i < colorArr.length; i++) {
        const element = colorArr[i];
        element.onclick = function() {
            global().holst.strokeStyle = element.style.background;
            global().color = element.style.background;
            global().holst.lineWidth = 3;
        }
    }

    ["k1", "k2", "k3"].forEach((elementString) => {
        getElement(elementString).onclick = function() {
            global().type = parseInt(elementString.charAt(1));
            global().type = parseInt(global().type);
            console.log("Type: " + global().type);
            getElement("k1").style.background = "#008CBA";
            getElement("k2").style.background = "#008CBA";
            getElement("k3").style.background = "#008CBA";
            getElement(elementString).style.background = "#4CAF50";
        }
    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

    getElement("q1").onclick = function() {
        console.log("Start " + document.getElementsByClassName("movingBoxClass").length);
        while(document.getElementsByClassName("movingBoxClass").length > 0) {
            removeElement(document.getElementsByClassName("movingBoxClass")[0]);
        }
        console.log("Stop " + document.getElementsByClassName("movingBoxClass").length);
    }

    getElement("q2").onclick = function() {
        holst.clearRect(0, 0, 3500, 3500);
        console.log("Clear all from holst");
    }
}
