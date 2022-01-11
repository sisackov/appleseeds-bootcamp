import https from 'https';
import { getDrinkDescription, getURL } from './utils.js';

const URL = getURL(process.argv);

https
    .get(URL, (res) => {
        let data = [];
        const headerDate =
            res.headers && res.headers.date
                ? res.headers.date
                : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);

        res.on('data', (chunk) => {
            data.push(chunk);
        });

        res.on('end', () => {
            const response = JSON.parse(Buffer.concat(data).toString());
            console.log(getDrinkDescription(response.drinks));
        });
    })
    .on('error', (err) => {
        console.log('Error: ', err.message);
    });
