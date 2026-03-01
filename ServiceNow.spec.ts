import test, { expect } from '@playwright/test'

test('Service Now Apple Iphone 13', async({page})=>{
await page.goto("https://dev363522.service-now.com/")
await page.locator("//input[@id='user_name']").fill('admin')
await page.locator("//input[@id='user_password']").fill('mf=3hp^0UJMZ')
await page.locator("//button[@id='sysverb_login']").click()
await page.waitForTimeout(3000)
await page.getByRole('menuitem',{name:'All'}).click()
await page.getByText('Service Catalog').click()
await page.waitForTimeout(5000)
await page.frame('gsft_main')?.getByRole('link', {name: 'Mobiles'}).first().click()
await page.frame('gsft_main')?.getByText('Apple iPhone 13 pro').click()
await page.waitForTimeout(3000)
await page.frame('gsft_main')?.getByText('Yes').click()
await page.frame('gsft_main')?.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99")
await page.frame('gsft_main')?.locator('[id="IO:ff1f478e9747011021983d1e6253af68"]').selectOption({value: 'unlimited'})

await page.frame('gsft_main')?.locator("label.radio-label").filter({hasText: 'Sierra Blue'}).click()
await page.frame('gsft_main')?.locator("label.radio-label").filter({hasText:'512 GB'}).click()
await page.frame('gsft_main')?.getByRole('button',{name: 'Order Now'}).click()

const successMess = await page.frame('gsft_main')?.locator("//span[text()='Thank you, your request has been submitted']").innerText()
 expect(successMess).toContain("Thank you, your request has been submitted")
console.log(successMess)
await page.screenshot({path:'Data/fullpage.png'})




})