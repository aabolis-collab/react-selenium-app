const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const { expect } = require('chai');

describe('React App UI Tests', function () {
    this.timeout(30000); // 30 second timeout for browser actions
    let driver;

    before(async function () {
        let options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('should verify the React app header or title exists', async function () {
        await driver.get('http://localhost:3000');
        const pageTitle = await driver.getTitle();
        expect(pageTitle).to.include('React App');
    });
});