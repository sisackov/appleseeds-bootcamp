const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to the happy hour app',
    });
});

app.get('/drinks', (req, res) => {
    res.render('drinks', {
        title: 'Go get a drink',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Stas',
        errorMessage: 'Page not found.',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
