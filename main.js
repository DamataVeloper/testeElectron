// app -> ciclo de vida do app
// BrowserWindow -> cria a janela do app

const { app, BrowserWindow, ipcMain} = require('electron');
//const { BrowserWindow } = require ('electron');

app.on('ready', () => {
    console.log("Aplicacao iniciada");
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400,

        webPreferences: {
            devTools: false,
            nodeIntegration: true,
            contextIsolation: false,
        }


    });    
    //mainWindow.loadURL('https://cursos.dankicode.com/');
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)    
});

app.on('window-all-closed', () =>{
    app.quit();
});

ipcMain.on('abrir-janela-sobre', () =>{
    let sobreWindow = new BrowserWindow({
        width: 300,
        height: 300
        
    });
    console.log("Aplicacao Sobre");
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
})

