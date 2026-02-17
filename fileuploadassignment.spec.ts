import test, { expect } from '@playwright/test'

test('File upload in heroukapp', async({page})=> {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='file']").first().setInputFiles("Data/Kalpoorneya_AS_Resume_2_9_2025_compressed.pdf")
    await page.waitForTimeout(7000)
    await page.locator("input.dz-hidden-input").setInputFiles("Data/flower2.avif");
    await page.locator("//input[@id='file-submit']").click()

    await page.waitForTimeout(7000)
    await expect(page.locator("text=File Uploaded!")).toBeVisible();
   
    await page.waitForTimeout(5000)
    await page.close()
    



})

test.only ('File download in heroukapp', async({page})=> {
    await page.goto("https://the-internet.herokuapp.com/download")
    const downloadPromise = page.waitForEvent('download')
    await page.locator("//a[text()='some-file.txt']").click()
    const download = await downloadPromise
    await download.saveAs("Data/"+download.suggestedFilename())
    await expect(download.suggestedFilename()).toBe('some-file.txt');



})