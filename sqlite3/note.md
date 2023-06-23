esercitazione scripting database sqlite3
cancellazione modifica di record

npm init -y --> package.json
``` json
{
  "name": "sqlite3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

npm install sqlite3 --> modifiche a package.json:
``` json
{
  "name": "sqlite3",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "sqlite3": "^5.1.6"
  }
}

``` 
code script.js:

``` javascript
const sqlite3 = require('sqlite3'). verbose();

const db = new sqlite3.Database('mydb.db');

db.serialize(() => {
    db.run('CREATE TABLE mytable (name TEXT, age INTEGER, city TEXT)');

    const stmt = db.prepare('INSER INTO mytable VALUES (?, ?, ?,)');
    stmt.run('Mario', 30, 'Roma');
    stmt.run('Luigi', 25, 'Napoli');
    stmt.run('', 35, 'Milano');
    stmt.finalize();

    console.log('dati inseriti correttamente');
});

db.close();
``` 