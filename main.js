const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const { getUrlPage } = require("./src/utils/utils")


var mainWindow = null;

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Gerador de Recibos',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    await mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    // Construir o menu quando a janela estiver pronta
    buildMenu();
}

function buildMenu() {
    const menuTemplate = [
        {
            label: 'Clientes',
            submenu: [
                {
                    label: 'Cadastrar',
                    click: () => {
                        mainWindow.webContents.send('navigate', getUrlPage('cliente/cadastro'));
                    }
                },
                {
                    label: 'Consultar',
                    click: () => {
                        // Lógica para abrir a janela de consulta de clientes
                    }
                }
            ]
        },
        {
            label: 'Gerar Recibo',
            click: () => {
                // Lógica para gerar recibo
            }
        },
        {
            label: 'Configurações',
            click: () => {
                // Lógica para abrir a janela de configurações
            }
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


module.exports = { mainWindow };
