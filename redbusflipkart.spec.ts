import { test,chromium, webkit } from '@playwright/test';

test("Redbus Load Test", async () => {

    const browser = await chromium.launch({
        channel: 'msedge',
        headless: false,
        slowMo: 1000
    });

    const edgeContext = await browser.newContext();
    const edgePage = await edgeContext.newPage();

    await edgePage.goto("https://www.redbus.in");

    const redBusTitle = await edgePage.title();
    console.log("Redbus Page Title:", redBusTitle);

    const redBusURL = edgePage.url();
    console.log("Redbus Page URL:", redBusURL);

    await edgePage.waitForTimeout(5000);

    



    const webkitBrowser= await webkit.launch({
        channel:'webkit', headless:false, slowMo:1000
    });

    const webkitContext = await webkitBrowser.newContext();
    const webkitPage = await webkitContext.newPage();

    await webkitPage.goto("https://www.flipkart.com");

    const flipkartTitle = await webkitPage.title();
    console.log("Flipkart Page Title:", flipkartTitle);

    const flipkartURL = webkitPage.url();
    console.log("Flipkart Page URL:", flipkartURL);

    await webkitPage.waitForTimeout(5000);
    await webkitBrowser.close(); 
    await browser.close();
});
