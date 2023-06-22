const fs = require ('fs');

//leggi il file di testo
fs.readFile('notes2.txt', 'utf8', (err, data) =>
{
    if (err) throw err;
    console.log(data);
}
);

//aggiungi una nuova nota al file di teto

fs.appendFile('notes.txt', '\nNota4', (err) =>
{
    if (err) throw err;
    console.log ('nota aggiunta');
}
);