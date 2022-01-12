const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs'); //set view engine to ejs-
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

const userRouter = require('./routes/users');

app.use('/users', userRouter); //chaining the user router to the app

app.listen(3000);
