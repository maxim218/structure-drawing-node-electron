"use strict";

function startElectronApp() {
    console.log("Start electron app");

    const electron = require('electron');
    const app = electron.app;
    const BrowserWindow = electron.BrowserWindow;

    let mainWindow = null;

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('ready', function () {
        mainWindow = new BrowserWindow({width: 600, height: 400});
        mainWindow.setMenu(null);
        mainWindow.loadURL('file://' + __dirname + '/index.html');
        // mainWindow.webContents.openDevTools();
        mainWindow.on('closed', function () {
            mainWindow = null;
        });
        // mainWindow.maximize();
    });
}

startElectronApp();