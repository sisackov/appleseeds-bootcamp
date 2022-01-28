const puppeteer = require('puppeteer');

async function getTableRows(page, selector) {
    return page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent || '');
        })
    );
}

async function getSuperstitions(url, nameSelector, descriptionSelector) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title'); //indicates the page has loaded

    // const selector = '.d3-o-table > tbody > tr ';
    const names = await page.$$eval(nameSelector, (elems) =>
        elems.map((elem) => elem.textContent)
    );
    const descriptions = await page.$$eval(descriptionSelector, (elems) =>
        elems.map((elem) => elem.textContent)
    );
    const superstitions = names.map((name, index) => ({
        name,
        description: descriptions[index],
    }));
    console.log(superstitions);

    await browser.close();
}

async function getLinks(page, linkSelector) {
    await page.waitForSelector(linkSelector);
    return page.$$eval(linkSelector, (elems) => elems.map((elem) => elem.href));
}

async function getRecipeLinks(url, linkSelector, nextPageSelector) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title'); //indicates the page has loaded

    const links = [];
    for (let i = 0; i < 10; i++) {
        const pageLinks = await getLinks(page, linkSelector);
        links.push(...pageLinks);
        await page.click(nextPageSelector);
    }
    console.log(links);
    console.log(links.length);

    await browser.close();
    return links;
}

async function startRun() {
    const recipeLinks = await getRecipeLinks(
        'https://www.foodsdictionary.co.il/tag/ethnic-food-recipes',
        'div.col > div.col-limit > a',
        'ul.paging-toolbar li:last-child'
    );
    const recipes = await getRecipeLinks('');

    // const s1 = await getSuperstitions(
    //     'https://www.pitria.com/russian-superstitions',
    //     'h3',
    //     'h3+p'
    // );
    // const s2 = await getSuperstitions(
    //     'https://p-kabbalah.co.il/%D7%90%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%98%D7%A4%D7%9C%D7%95%D7%AA/',
    //     'div.elementor-widget-container > h2',
    //     'div.elementor-widget-container > h2+p'
    // );
}

startRun();
