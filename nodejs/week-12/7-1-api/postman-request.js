import request from 'postman-request';
import { getDrinkDescription, getURL } from './utils.js';

const URL = getURL(process.argv);

request.get({ url: URL, json: true }, (error, response) => {
    if (error) {
        console.error('Error:', error);
    }
    console.log(getDrinkDescription(response.body.drinks));
});
