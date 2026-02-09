import { test, expect } from '@playwright/test';

test('Leafground Checkbox assignment', async ({ page }) => {

  await page.goto('https://leafground.com/checkbox.xhtml');
  await page.locator("span.ui-chkbox-label", { hasText: "Basic" }).click();
  await page.locator("span.ui-chkbox-label", { hasText: "Ajax" }).click();

  await expect(page.locator("text=Checked")).toBeVisible();
  await page.waitForTimeout(5000);

    await page.locator("//label[normalize-space()='Java']/preceding-sibling::div").click();


  await page.waitForTimeout(5000);

 const box = page.locator("#j_idt87\\:ajaxTriState .ui-chkbox-box");
  const input = page.locator("#j_idt87\\:ajaxTriState_input");

  await box.click();
  await expect(input).not.toHaveAttribute("value", "1");

  await page.waitForTimeout(5000);

  

// confirm
//await expect(toggle).toHaveClass(/ui-toggleswitch-checked/);
  const card = page.locator(".card:has-text('Toggle Switch')");
const toggle = card.locator(".ui-toggleswitch");
const slider = toggle.locator(".ui-toggleswitch-slider");

// OFF
await expect(toggle).not.toHaveClass(/ui-toggleswitch-checked/);

// click
await slider.click();

// ON
await expect(toggle).toHaveClass(/ui-toggleswitch-checked/);



  await page.waitForTimeout(5000)
  const disabledCheckbox = page.locator(".card:has-text('Verify if check box is disabled')").locator(".ui-chkbox-box");
await expect(disabledCheckbox).toHaveClass(/ui-state-disabled/);


await page.locator(".ui-selectcheckboxmenu-trigger").click();
for (const city of ['Miami', 'London', 'Berlin', 'Paris', 'Rome']) {
  await page.locator(`//li[@data-item-value='${city}']`).click();
}
await page.waitForTimeout(5000)



  await page.close();

});