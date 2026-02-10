import test, { expect } from '@playwright/test'

test("Radio button handling", async ({ page}) => {

    await page.goto("https://leafground.com/radio.xhtml")
    
    await page.waitForTimeout(5000)

    const defaultBrowser = await page.getByLabel('Safari').nth(1).isChecked();

    console.log("Default Browser is Safari:", defaultBrowser)

    await page.locator("(//label[text()='Chrome'])[1]/preceding-sibling::div").click()
    await page.waitForTimeout(3000)
    await page.locator("//label[text()='Chennai']/preceding-sibling::div").click()
    await page.waitForTimeout(3000)
    
    const ageGroup = await page.getByLabel('21-40 Years').isChecked()
    console.log("Age group 21-40 is selected:", ageGroup)

    await page.waitForTimeout(5000)
    await page.close()
    




})
