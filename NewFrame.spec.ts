import test, { expect } from '@playwright/test'

test("Frame handling with locators", async({page}) => {

    await page.goto("https://leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    let expectedMess = "Hurray! You Clicked Me."
    let actualMess = await page.frameLocator("(//iframe)[1]").locator("#Click").innerText()
    expect(expectedMess).toEqual(actualMess)
    console.log(actualMess)
    console.log("Assertion passed")

    const NumberofFrames = page.frames().length
    console.log(NumberofFrames)

    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
    await page.waitForTimeout(5000)

    let expMess = "Hurray! You Clicked Me."
    let actMess = await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText()
    expect(expMess).toEqual(actMess)
    console.log(actMess)
    console.log("Nested Frame assertion passed")


})