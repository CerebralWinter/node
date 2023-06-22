const http = require ('http');

const server = http.createServer((req, res) => 
{
    if (req.url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('benvenuto nella mia applicazione');
    }
    else if (req.url === '/about') 
    {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('questa è la pagina about');
    }
    else 
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('pagina non trovata');
    }
});

server.listen(3000, () => {
    console.log('il server è in ascolto ');
});
