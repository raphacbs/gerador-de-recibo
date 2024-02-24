const { BrowserView } = require('electron');



function build(){
  const cadastroView = new BrowserView();
  mainWindow.setBrowserView(cadastroView);
  cadastroView.setBounds({ x: 0, y: 40, width: 800, height: 560 }); // Ajuste conforme necessário
  cadastroView.setAutoResize({ width: true, height: true });
  cadastroView.webContents.loadFile('..\..\pages\cliente\cadastro\index.html');
}

module.exports = { build };
