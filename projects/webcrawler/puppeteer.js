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
    'week',
    'opponent',
    'result',
    'completions',
    'passAttempts',
    'passYards',
    'passAverage',
    'passTouchdowns',
    'interceptions',
    'sacks',
    'sackYards',
    'qbRating',
    'rushAttempts',
    'rushYards',
    'rushAverage',
    'rushTouchdowns',
    'fumbles',
    'fumblesLost',
];
const wrTableHeaders = [
    'week',
    'opponent',
    'result',
    'receptions',
    'receivingYards',
    'receivingAverage',
    'longestReception',
    'receivingTouchdowns',
    'rushingAttempts',
    'rushingYards',
    'rushingAverage',
    'longestRush',
    'rushingTouchdowns',
    'fumbles',
    'fumblesLost',
];

const rbTableHeaders = [
    'week',
    'opponent',
    'result',
    'rushingAttempts',
    'rushingYards',
    'rushingAverage',
    'longestRush',
    'rushingTouchdowns',
    'receptions',
    'receivingYards',
    'receivingAverage',
    'longestReception',
    'receivingTouchdowns',
    'fumbles',
    'fumblesLost',
];

// async function getTableRows(page, selector) {
//     return page.$$eval(selector, (trs) =>
//         trs.map((tr) => {
//             const tds = [...tr.querySelectorAll('td')];
//             return tds.map((td) => td.textContent);
//         })
//     );
// }

const getTableHeaders = (playerPosition) => {
    switch (playerPosition) {
        case 'QB':
            return qbTableHeaders;
        case 'WR':
        case 'TE':
            return wrTableHeaders;
        case 'RB':
            return rbTableHeaders;
        default:
            return [];
    }
};

async function getPlayerStatsNFL(playerName, playerPosition) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://www.nfl.com/players/${playerName}/stats/`;
    console.log(url);

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title');

    // const selector = '.d3-o-table > tbody > tr ';
    const selector = 'table[summary="Recent Games"] > tbody > tr ';

    // const table = await page.$$('.d3-o-table > tbody > tr ');
    // console.log(table);
    const tableRows = await page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent);
        })
    );

    const tableHeaders = getTableHeaders(playerPosition);

    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[tableHeaders[index]] = cell;
        });
        rowData.year = 2021;
        return rowData;
    });
    console.log(data); //Works!!!

    await browser.close();
}
// getPlayerStatsNFL('tom-brady', 'QB');
// getPlayerStatsNFL('travis-kelce', 'TE');
getPlayerStatsNFL('dalvin-cook', 'RB');
// getPlayerStatsNFL('mike-evans', 'WR');

const neededOffensivePositions = ['QB', 'RB', 'WR', 'TE'];
const playerDataTableHeader = [
    'imageLink',
    'name',
    'position',
    'age',
    'height',
    'weight',
    'experience',
    'college',
];

const espnTeamRosterLinks = [
    'buf/buffalo-bills',
    'mia/miami-dolphins',
    'ne/new-england-patriots',
    'nyj/new-york-jets',
    'bal/baltimore-ravens',
    'cin/cincinnati-bengals',
    'cle/cleveland-browns',
    'pit/pittsburgh-steelers',
    'hou/houston-texans',
    'ind/indianapolis-colts',
    'jax/jacksonville-jaguars',
    'ten/tennessee-titans',
    'den/denver-broncos',
    'kc/kansas-city-chiefs',
    'oak/oakland-raiders',
    'lac/los-angeles-chargers',
    'chi/chicago-bears',
    'det/detroit-lions',
    'gb/green-bay-packers',
    'min/minnesota-vikings',
    'dal/dallas-cowboys',
    'nyg/new-york-giants',
    'phi/philadelphia-eagles',
    'wsh/washington',
    'atl/atlanta-falcons',
    'car/carolina-panthers',
    'no/new-orleans-saints',
    'tb/tampa-bay-buccaneers',
    'ari/arizona-cardinals',
    'sf/san-francisco-49ers',
    'sea/seattle-seahawks',
    'lar/los-angeles-rams',
];

async function getPlayersNameAndPosition(teamName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(`https://www.espn.com/nfl/team/roster/_/name/${teamName}`);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title');

    const selector = 'div.ResponsiveTable.Offense table > tbody > tr';
    const tableRows = await page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td, index) => {
                try {
                    if (index === 0) {
                        return td.querySelector('img').getAttribute('alt');
                    } else if (index === 1) {
                        return `${td.querySelector('a').textContent}__${
                            td.querySelector('span').textContent
                        }`;
                    }
                    return td.textContent;
                } catch (err) {
                    console.log(err);
                }
                return '';
            });
        })
    );

    const data = tableRows
        .map((row) => {
            const rowData = {};
            row.forEach((cell, index) => {
                if (index === 0) {
                    rowData[playerDataTableHeader[index]] = cell;
                    rowData.espnId = cell
                        .slice(cell.lastIndexOf('/') + 1)
                        .split('.')[0];
                } else if (index === 1) {
                    const split = cell.split('__');
                    rowData[playerDataTableHeader[index]] = split[0];
                    rowData.number = split[1];
                    rowData.teamName = teamName.split('/')[1];
                } else {
                    rowData[playerDataTableHeader[index]] = cell;
                }
            });
            return rowData;
        })
        .filter((player) => neededOffensivePositions.includes(player.position));

    await browser.close();
    return data;
    // console.log(data); //Works!!!
}

async function startRun() {
    const team = await getPlayersNameAndPosition(espnTeamRosterLinks[31]);
    console.log(team);
}

// startRun();
