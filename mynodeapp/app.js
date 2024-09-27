// app.js
// const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// Route GET
// app.get('/', (req, res) => {
//     res.send('Hello, Get request!');
// });

// Middleware untuk parsing body request
app.use(express.json());

// Route Post 
app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log('Server running at http://localhost:3000/');
});

// app.get('/text', (req, res) => {
//     res.send('Ini adalah respon text.');
// });

// app.get('/html', (req, res) => {
//     res.send('<h1>Ini adalah response HTML</h1>.');
// });

// app.get('/json', (req, res) => {
//     res.json({ message: 'Ini adalah respon text.'});
// });


// Serving static file
app.use(express.static('public'));


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
