import { test } from '@playwright/test';

test('Dropdowns Handling', async ({ page }) => {
  await page.goto('https://leafground.com/select.xhtml');
  await page.locator("//select[@class='ui-selectonemenu']").selectOption('Playwright')
  const options = await page.locator("//select[@class='ui-selectonemenu']/option").count()

console.log("Total options:", options)


await page.waitForTimeout(3000)
await page.locator("(//div[@class='ui-selectonemenu-trigger ui-state-default ui-corner-right'])[1]").click()
await page.locator("//li[@data-label='India']").click()
await page.waitForTimeout(3000)
await page.locator("#j_idt87\\:city .ui-selectonemenu-trigger").click();
await page.locator("li.ui-selectonemenu-item", { hasText: "Chennai" }).click();
//await page.locator("(//div[@class='ui-selectonemenu-trigger ui-state-default ui-corner-right'])[2]").click()
//await page.locator("//label[text()='Chennai']").click()
await page.waitForTimeout(3000)
await page.locator("//span[@class='ui-button-text']").click()
await page.locator("//li[@data-item-value='Playwright']").click()
await page.waitForTimeout(3000)

await page.locator("#j_idt87\\:lang .ui-selectonemenu-trigger").click()
await page.locator("li.ui-selectonemenu-item", { hasText: "English" }).click()
await page.waitForTimeout(3000)

await page.locator("#j_idt87\\:value .ui-selectonemenu-trigger").click()
await page.locator("li.ui-selectonemenu-item", { hasText: "one"}).click()
await page.waitForTimeout(3000)

await page.close()
})