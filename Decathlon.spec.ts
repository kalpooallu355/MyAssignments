import {test, expect} from '@playwright/test'

test ('Decathlon search and add to cart', async ({ page }) => {
await page.goto("https://www.decathlon.in/")
await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App")
await page.waitForTimeout(3000)

await page.getByText('Search for  ').first().click()
const search = page.getByRole('textbox')
await expect(search).toBeEnabled()
await search.fill('shoes')
await search.press('Enter')


await expect(page).toHaveTitle('Search | shoes')
const title = await page.title()
console.log('page title:', title)

await page.locator("//span[text()='Men (276)	']").click()
await page.locator("//span[contains(text(),'Running')]").click();
await page.waitForTimeout(5000)
await page.locator("//span[contains(text(),'Uk 10.5 - eu 45')]").click();

await page.locator("//span[text()='Most Relevant']").click()
await page.locator("//a[text()='Price: High to Low']").click()
await page.waitForTimeout(5000)
await page.getByAltText('Men Running and Trail Running Shoes, Kiprun JF 190 Grip - Silver Grey').first().click()
await page.locator("//div[text()='UK 10.5 - EU 45']").click()
await page.locator("//span[text()='ADD TO CART']").click()
await page.locator("//p[text()='Cart']").click()
const totalVal = await page.locator("//p[text()='₹3,299']").innerText()
console.log("Total value of cart:", totalVal)



})