const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
// app.use('public', express.static(__dirname + 'public'));

app.listen(3030, ()=>{
    console.log('El servidor se encuentra activo');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});