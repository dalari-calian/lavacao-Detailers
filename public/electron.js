const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = require('electron-is-dev');

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },        
        autoHideMenuBar: true,
        icon: path.join(__dirname, "detailer-logo-1.png")
    });

    if (isDev) {
        console.log('Aplicativo em modo de desenvolvimento.');
        win.loadURL("http://localhost:3000");
    } else {
        console.log('Aplicativo em modo de produção.');
        win.loadFile(path.join(__dirname, "index.html"));
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
