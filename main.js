// app -> ciclo de vida do app
// BrowserWindow -> cria a janela do app

const { app, BrowserWindow, ipcMain} = require('electron');


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
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)    
});

app.on('window-all-closed', () =>{
    app.quit();
});


let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () =>{
    if( sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 300,
            alwaysOnTop: true,
            frame: false,
            webPreferences: {
                devTools: false,
                nodeIntegration: true,
                contextIsolation: false,
            }

        });

        sobreWindow.on('closed', () =>{
            sobreWindow = null
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});


ipcMain.on('fechar-janela-sobre', ()=>{
    sobreWindow.close();
})

