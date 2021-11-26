// app -> ciclo de vida do app
// BrowserWindow -> cria a janela do app



const { app, BrowserWindow } = require('electron');
//const { BrowserWindow } = require ('electron');

app.on('ready', () => {
    console.log("Aplicacao iniciada");
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    //mainWindow.loadURL('https://cursos.dankicode.com/');
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
});

app.on('window-all-closed', () =>{
    app.quit();
});

