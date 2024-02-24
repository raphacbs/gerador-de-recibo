const { openCadastroWindow } = require("./src/cliente/cadastro/cadastroWindow");
const { mainWindow } = require("./main");

const menuTemplate = [
    {
        label: 'Clientes',
        submenu: [
            {
                label: 'Cadastrar',
                click: () => {
                    mainWindow.webContents.send('open-cadastro');
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
]

module.exports = menuTemplate;
