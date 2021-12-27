const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(cors());

/*
! Want to try the XSS attack on your own? Here’s what to do:

!Open a new terminal window and change into this directory.

!Run ‘npm install’ in the folder

!After the ‘npm install’ is complete, run ‘node index.js’

!Back in your editor, change the request URL to ‘http://localhost:3001’ and save the file

!In the browser, search for the letter “t”. That is a special search term that will cause the server to send you an XSS payload */

app.get('/', (req, res) => {
    if (req.query.srsearch === 't') {
        res.send({
            query: {
                search: [
                    {
                        snippet: `
              <img src="asdf" onerror="document.body.innerHTML = '<h1>HAHAHA, I control this app now!!!</h1>';"></img>
            `,
                    },
                ],
            },
        });
    } else {
        res.send({
            query: {
                search: [],
            },
        });
    }
});

app.listen(3001);
