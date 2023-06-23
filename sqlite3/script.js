const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydb.db');

db.serialize(() => {
    db.run('CREATE TABLE mytable (name TEXT, age INTEGER, city TEXT)');

    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?)');
    stmt.run('Mario', 30, 'Roma');
    stmt.run('Luigi', 25, 'Napoli');
    stmt.run('Giovanni', 35, 'Milano');
    stmt.finalize();

    console.log('dati inseriti correttamente');
});

db.close();