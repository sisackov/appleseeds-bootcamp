const axios = require('axios');
const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Instructs the blank page to navigate a URL
//     await page.goto('https://www.nfl.com/players/tom-brady/stats/');

//     // await page.goto('https://pptr.dev');

//     // Waits until the `title` meta element is rendered
//     await page.waitForSelector('title');

//     const title = await page.title();
//     console.info(`The title is: ${title}`);

//     await browser.close();
// })();

const qbTableHeaders = [
    'Week',
    'Opponent',
    'Result',
    'Completions',
    'Pass Attempts',
    'Pass Yards',
    'Pass Average',
    'Pass Touchdowns',
    'Interceptions',
    'Sacks',
    'SackYards',
    'QB Rating',
    'Rush Attempts',
    'Rush Yards',
    'Rush Average',
    'Rush Touchdowns',
    'Fumbles',
    'Fumbles Lost',
];

async function getPlayerStats(playerName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(`https://www.nfl.com/players/${playerName}/stats/`);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title');

    // const title = await page.title();
    // console.info(`The title is: ${title}`);

    const selector = '.d3-o-table > tbody > tr ';

    // const table = await page.$$('.d3-o-table > tbody > tr ');
    // console.log(table);
    const tableRows = await page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent);
        })
    );

    // console.log(tableRows);
    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[qbTableHeaders[index]] = cell;
        });
        return rowData;
    });
    console.log(data); //Works!!!

    // await browser.close();
}

// getPlayerStats('tom-brady');
