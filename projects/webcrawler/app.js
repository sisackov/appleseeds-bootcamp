const request = require('postman-request');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.espn.com/nfl/player/gamelog/_/id/3918298/josh-allen';

request({ url: url, json: true }, function (err, res, body) {
    if (err) {
        console.log(err, 'error occurred while hitting URL');
    } else {
        const $ = cheerio.load(body);
        const playerName = $('h1').text();
        const tableHead = $('.Table__THEAD').find('tr').find('th');
        const playerStatsTable = $('.Table__TBODY'); //.find('tr').find('td').text();
        console.log(playerName);
        tableHead.each(function (i, el) {
            console.log(i, $(this).text());
            // console.log(el.children[0].data);
        });
    }
});
