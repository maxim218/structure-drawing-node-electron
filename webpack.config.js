"use strict";

const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'production',
    externals: [nodeExternals()],
    entry: "./scripts/start.js",
    output: {
        filename: "./code.js"
    }
};
