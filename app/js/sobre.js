const {ipcRenderer, shell} = require('electron');
const process = require('process');
//const Renderer = require('electron/renderer');

const linkFechar = document.querySelector('#link-fechar');
const linkTwitter = document.querySelector('#link-twitter');
const versaoElectron = document.querySelector('#versao-electron');

window.onload = () =>{
    versaoElectron.textContent = process.versions.electron;
    //versaoElectron.textContent = process.versions.chrome;
}

linkFechar.addEventListener('click', ()=>{
    ipcRenderer.send('fechar-janela-sobre');
})

linkTwitter.addEventListener('click', ()=>{
    
    shell.openExternal("https://github.com/DamataVeloper");
})