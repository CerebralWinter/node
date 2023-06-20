const fs = require ('fs');

fs.writeFile('message.txt', 'ciao', (err) => {
    if (err) throw err;
    console.log ('file creato');
});