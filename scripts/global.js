"use strict";

import LineDrawer from "./LineDrawer";

const GLOBAL = {
    obj: undefined,
    move: true,
    draw: false,
    lineDrawer: new LineDrawer(),
    type: 1,
};

export default function global() {
    return GLOBAL;
}
