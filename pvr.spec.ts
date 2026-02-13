import { test, expect } from '@playwright/test';

test('Booking tickets in PVR', async ({ page }) => {

  await page.goto('https://www.pvrcinemas.com/');
  await page.waitForTimeout(3000)
  await page.getByPlaceholder('Search for city').fill('Chennai');
  await page.locator("//li[text()='Chennai']").click
  await page.locator("//span[text()='Cinema']").click()

  await page.locator('.p-dropdown:has-text("Select Cinema")').click();


await page.locator('li[role="option"]').first().click();
await page.getByText('Select Date').click
await page.getByText('Tomorrow').click()
await page.locator("(//span[text()='COUPLE FRIENDLY'])[2]").click();
await page.locator("//span[text()='10:50 PM']").click()
await page.waitForTimeout(4000)
await page.locator("(//span[@class='p-button-label p-c'])[5]").click()

await page.locator("//div[@class='card p-2']").click()
await page.getByText('Accept').click()

await page.locator("//div[@class='mt-3']").click()
await page.getByText('Accept').click()
await page.locator("//span[@id='SL.SILVER|G:13']").click()
const seatNum = await page.locator("//div[@class='seat-number']").innerText()
console.log(seatNum)

const total = await page.locator("//div[@class='grand-prices']").innerText()
console.log(total)

await page.getByText('Proceed').click()









  
});

