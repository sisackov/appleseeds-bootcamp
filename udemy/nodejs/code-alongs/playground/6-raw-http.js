const http = require('http');
const url =
    'http://api.weatherstack.com/current?access_key=57544947ac948939da9e83f838c8dfd6&query=34.78,31.25&units=m';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

// console.log(request.getHeaders());

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();
