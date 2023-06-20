# nelle sottocartelle sono presenti:
- l'inizializzazione tramite express,
- una inizializzazione alternativa,
- un progetto per la lettura in console di un file di testo,
- un progetto per la scrittura di un file di testo.

>cosa sono i moduli?
**i moduli sono analoghi agli import in c#: nelle esercitazioni sono stati utilizzati i moduli express, http, fs. Sono una tipicità di Node.js.**


moduli? --> node.js import dei moduli?

dotnet core webapp

node.js comandi npm Node package manager

js è asincrono

fullstack

node -v

npm update -g

npm --version

npm init
package.json (dipendenze)

npm install express
server js
const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('ciao');
});

app.listen(3000, function () {
    console.log('il server è in ascolto ');
});

node server.js
http://localhost:3000/

altro modo di avviare il server:

const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('benvenuto nella mia applicazione');
    }else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('questa è la pagina about');
    }else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('pagina non trovata');
    }
});

server.listen(3000, () => {
    console.log('il server è in ascolto ');
});


npm start (considea l'entry point di default, modificabile dal json di configurazione)


creare una connessione tra node.js e visual studio sulla porta 3000

gestore http?

node è asincrono?

servizi web moduli express 

ajax è un modulo? 

moduli per dare funzionalità a node

angular e vue creazione interfacce utente















