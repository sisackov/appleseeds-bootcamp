import axios from 'axios';
import { getDrinkDescription, getURL } from './utils.js';

const URL = getURL(process.argv);

axios
    .get(URL)
    .then((response) => {
        const drinks = response.data.drinks;
        console.log(getDrinkDescription(drinks));
    })
    .catch((error) => {
        console.error('Error:', error);
    });
