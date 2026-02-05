import { test } from '@playwright/test';

test('Edit Lead in Leaftaps', async ({ page }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.locator("input[name='USERNAME']").fill('Demosalesmanager');
  await page.locator("input[name='PASSWORD']").fill('crmsfa');
  await page.locator("input[value='Login']").click();

  await page.locator('text=CRM/SFA').click();
  await page.locator("xpath=//a[text()='Create Lead']").click();

  await page.locator('#createLeadForm_companyName').fill('TestLeaf');
  await page.locator('#createLeadForm_firstName').fill('kp');
  await page.locator('#createLeadForm_lastName').fill('Allu');


  await page.locator("input[name='submitButton']").click();

  // Edit Lead

  await page.waitForTimeout(5000)
  await page.locator("xpath=//a[text()='Edit']").click();

await page.waitForLoadState('networkidle')
await page.locator('input#updateLeadForm_companyName').clear();
await page.locator('input#updateLeadForm_companyName').fill('snapdeal');





  
await page.waitForLoadState('networkidle');
await page.locator('input[value="Update"]').click();


});