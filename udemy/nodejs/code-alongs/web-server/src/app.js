const express = require('express');

// const path = require('path');
// const livereload = require('livereload');
// const connectLivereload = require('connect-livereload');

// // open livereload high port and start to watch public directory for changes
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));

// // ping browser on Express boot, once browser has reconnected and handshaken
// liveReloadServer.server.once('connection', () => {
//     setTimeout(() => {
//         liveReloadServer.refresh('/');
//     }, 100);
// });

const app = express();
// app.use(connectLivereload());

//get takes 2 arguments:
//1. the route
//2. the callback function
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Andrew',
        },
        {
            name: 'Sarah',
        },
    ]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
