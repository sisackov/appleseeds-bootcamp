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
    await page.waitForSelector(linkSelector, { timeout: 5000 });
    return page.$$eval(linkSelector, (elems) => elems.map((elem) => elem.href));
}

async function infiniteScrollToBottom(page) {
    let hasScroll = true;
    let scrollCount = 0;
    let previousHeight;
    while (hasScroll) {
        try {
            scrollCount++;
            console.log('Scrolling...', scrollCount);
            previousHeight = await page.evaluate('document.body.scrollHeight');
            await page.evaluate(
                'window.scrollBy(0, document.body.scrollHeight)'
            );
            await page.waitForFunction(
                `document.body.scrollHeight > ${previousHeight}`,
                { timeout: 5000 }
            );
            await page.waitForTimeout(1000);
        } catch (e) {
            console.error('Error in infinite scroll', e.message);
            hasScroll = false;
        }
    }
}

async function getRecipeLinks(url, linkSelector, options = {}) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector(linkSelector); //indicates the page has loaded
    console.log('Page loaded', url);

    const { nextPageSelector, isInfiniteScroll } = options;

    const links = [];
    let pageLinks = [];
    if (nextPageSelector) {
        for (let i = 0; i < 10; i++) {
            pageLinks = await getLinks(page, linkSelector);
            links.push(...pageLinks);
            await page.click(nextPageSelector);
        }
    } else {
        if (isInfiniteScroll) {
            await infiniteScrollToBottom(page);
        }
        pageLinks = await getLinks(page, linkSelector);
        links.push(...pageLinks);
    }
    console.log(links);
    console.log(links.length);

    await browser.close();
    return links;
}

async function getRecipeFD(recipeLinks) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(recipeLinks[0]);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title'); //indicates the page has loaded

    const recipeName = await page.$eval('h1', (elem) => elem.textContent);
    const ingredients = await page.$$eval(
        'ul.list-group li:not([class*="sub-title"])',
        (elems) => {
            return elems.map((elem) => elem.textContent);
        }
    );

    const steps = await page.$$eval('ul.howto-list li', (elems) => {
        return elems.map((elem) => elem.textContent);
    });
    const prepTime = await page.$eval(
        'ul.recipe-basic-details > li:nth-child(3)',
        (elem) => elem.textContent
    );

    await browser.close();

    return {
        recipeName,
        ingredients,
        steps,
        prepTime,
    };
}

async function startRun() {
    // const recipeLinks = await getRecipeLinks(
    //     'https://www.foodsdictionary.co.il/tag/ethnic-food-recipes',
    //     'div.col > div.col-limit > a',
    //     { nextPageSelector: 'ul.paging-toolbar li:last-child' }
    // );
    // const recipes = await getRecipes(recipeLinks);
    // const recipes = await getRecipeFD([
    //     'https://www.foodsdictionary.co.il/Recipes/10980',
    // ]);
    const recipeLinks2 = await getRecipeLinks(
        'https://www.ronyohananov.com/blog/categories/%D7%9E%D7%90%D7%9B%D7%9C%D7%99-%D7%A2%D7%93%D7%95%D7%AA',
        '#pro-gallery-margin-container  div:nth-child(2) > div > article > div > div > a',
        { isInfiniteScroll: true }
    );

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
