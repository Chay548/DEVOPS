const webdriver = require('selenium-webdriver');
const assert = require('assert');
const path = require('path');
const { Builder, By, until } = webdriver;

// Build the WebDriver for Chrome
const driver = new Builder().forBrowser('chrome').build();

async function runTest() {
    try {
        // Get the absolute path of the HTML file
        const dirname = __dirname;
        // Open the HTML file in the browser
        await driver.get('file://' + path.join(dirname, 'index.html'));

        // Find the input elements and enter values
        const num1 = await driver.findElement(By.id('num1'));
        await num1.sendKeys('48');

        const num2 = await driver.findElement(By.id('num2'));
        await num2.sendKeys('500');

        // Click the "Add" button
        const addButton = await driver.findElement(By.id('add'));
        await addButton.click();

        // Get the result text and verify it
        const result = await driver.findElement(By.id('result'));
        const text = await result.getText();
        assert.strictEqual(text, '60', 'Sum calculation is incorrect');

        console.log('Test passed: Sum is correct');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        // Wait for user input to close the browser
        console.log('Press any key to exit...');
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on('data', async () => {
            await driver.quit();
            process.exit(0);
        });
    }
}

// Run the test
runTest();
