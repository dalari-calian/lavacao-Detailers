const { app, BrowserWindow} = require('electron');
const path = require('path');

const idDev = require('electron-is-dev')

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 600,
        webPreferences: {
            preload: path.join(__dirname, "preloader.js")
        },
        autoHideMenuBar: true,
        icon: path.join(__dirname, "detailer-logo-1.png")
    })
    
    //win.loadFile("index.html");
    win.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
    createWindow();

    app.on("active", () => {
        if (BrowserWindow.getAllWindows(). length === 0) createWindow();
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})

