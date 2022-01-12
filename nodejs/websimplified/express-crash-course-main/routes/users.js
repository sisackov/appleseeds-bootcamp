const express = require('express');
const router = express.Router(); //independently of the router, we can add middleware to our app
/**
 ** The main difference between express() and express.Router()
 ** is that express() is a top level function, which means it
 ** performs core functionality for the library and it contains
 ** its own methods where, as a matter of fact, Router is one,
 ** and that is why when we create a specific router we chain
 ** the Router() method on express, kind of like how we use app.use().
 */

router.use(logger);

router.get('/', (req, res) => {
    console.log(req.query.name);
    res.send('User List');
    // res.status(500).send('Something broke!');//500 is internal server error
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('Error');
        res.render('users/new', { firstName: req.body.firstName });
    }
});

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    });

const users = [{ name: 'Kyle' }, { name: 'Sally' }];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

//*
/**
 *! below is a middleware function
 ** Middleware functions are functions that have access to the request object (req),
 ** the response object (res), and the next function in the application’s request-response cycle.
 ** The next function is a function in the Express router which, when invoked,
 ** executes the middleware succeeding the current middleware.
 ** Middleware functions can perform the following tasks:
 **    - Execute any code.
 **    - Make changes to the request and the response objects.
 **    - End the request-response cycle.
 **    - Call the next middleware in the stack.
 ** If the current middleware function does not end the request-response cycle,
 ** it must call next() to pass control to the next middleware function.
 ** Otherwise, the request will be left hanging.
 */
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;
