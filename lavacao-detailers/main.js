const { app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 600,
        webPreferences: {
            preload: path.join(__dirname, "preloader.js")
        },
        autoHideMenuBar: true,
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

