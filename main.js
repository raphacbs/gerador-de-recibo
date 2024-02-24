const { app, BrowserWindow, Menu, ipcMain  } = require('electron')
const menuTemplate = require('./menuTemplate');

let mainWindow;

const createWindow = async () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Gerador de Recibos'
    });

    await mainWindow.loadFile('index.html');

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('navigate', (event, route) => {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'src', 'pages', `${route}`, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  });

module.exports = { mainWindow };
