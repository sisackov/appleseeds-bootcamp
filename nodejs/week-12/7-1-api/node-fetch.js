import fetch from 'node-fetch';
import { getDrinkDescription, getURL } from './utils.js';

const URL = getURL(process.argv);

const response = await fetch(URL);
const body = await response.json();
console.log(getDrinkDescription(body.drinks));

// console.log(body);
