const express = require('express');

const app = express();

//get takes 2 arguments:
//1. the route
//2. the callback function
app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/weather', (req, res) => {
    res.send('Your weather');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
