const express = require('express');
const app = express();
//prerequisiti: npm install ajax, queryselector, express 
//creare cartella file statici in public
//mettere in public sia html che script.js

app.use(express.urlencoded({extended: true})); //pare che deserializi anche l'url nel quale risiede il form
//extended true verifica che i valori contenuti nel form non siano solamente stringhe ma valori
app.use(express.json()); //le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public'));//express crea una rotta "public" che serve i file statici (html, js..)

app.post('/submit',(req, res) => // /submit è la rotta alla quale viene inviato il modulo 
{
    const {name, email, checkbox, pets, area} = req.body; //richiama le informazioni dei campi del form //
    console.log(`nome: ${name}, email: ${email}, checkbox: ${checkbox}, pets:${pets}, area:${area}`);
    res.send(`Dati ricevuti Nome: ${name}, Email: ${email}, Checkbox:${checkbox}, Pets:${pets}, Area:${area}`); //conferma in post la ricezione dei dati
});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000');
});