const http = require('http');
const fs = require('fs');
const path = require('path');

const httpServer = http.createServer(requestResponseHandler);

function requestResponseHandler(request, response) {
    console.log(`Request came: ${request.url}`);
    if (request.url === '/') {
        sendResponse('index.html', 'text/html', response);
    } else if (request.url === '/raw-html') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Welcome!</h1>');
        response.end();
    } else if (request.url === '/users') {
        sendResponse('users.json', 'application/json', response);
    } else {
        sendResponse(request.url, getContentType(request.url), response);
    }
}

function sendResponse(url, contentType, res) {
    let file = path.join(__dirname, url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write(`File '${file}' Not Found!`);
            res.end();
            console.log('Response: 404 ${file}, err');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(content);
            res.end();
            console.log(`Response: 200 ${file}`);
        }
    });
}

function getContentType(url) {
    console.log(`getContentType: ${url}`);
    switch (path.extname(url)) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        default:
            return 'application/octate-stream';
    }
}

httpServer.listen(3001, () => {
    console.log('Node.JS static file server is listening on port 3001');
});
