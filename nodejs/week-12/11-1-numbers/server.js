const express = require('express');
const app = express();

const numbersRouter = require('./routes/numbers');

app.use('/numbers', numbersRouter); //chaining the numbers router to the app

app.listen(3000);
