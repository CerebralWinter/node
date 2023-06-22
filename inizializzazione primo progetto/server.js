const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('ciao');
});

app.get('/about', function (req, res){
    res.send('about');
});


app.listen(3000, function () {
    console.log('il server è in ascolto ');
});