//inter process comuniction
const { ipcRenderer } = require('electron');
const linkSobre =  document.querySelector('#link-sobre');

linkSobre.addEventListener('click', () => {
    console.log('oioioioioioi')
    ipcRenderer.send('abrir-janela-sobre')
});