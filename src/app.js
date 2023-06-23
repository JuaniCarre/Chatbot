const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const SESSION_FILE_PATH = './session.json'
let client;
let sessionData;

const withSession = () => {
  //si existe cargamos credenciales
  sessionData = require(SESSION_FILE_PATH);

  client = new Client({
    session: sessionData
  });

  client.on('ready', () => {
    console.log('Client is ready!')
  })

  client.on('auth_failure', ()=>{
    console.log("error de auth, genera el qr de nuevo (borra el .json)")
  })

  client.initialize();
}