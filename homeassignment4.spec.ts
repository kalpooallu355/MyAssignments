import test from '@playwright/test'

test('create lead', async ({ page }) => {
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator("input[name='USERNAME']").fill('Demosalesmanager');
await page.locator("input[name='PASSWORD']").fill('crmsfa');
await page.locator("input[value='Login']").click();

await page.waitForTimeout(5000)
await page.locator('text=CRM/SFA').click();
await page.locator('text=Leads').first().click();


await page.locator("a[href='/crmsfa/control/createLeadForm']").click();
await page.locator('#createLeadForm_companyName').fill('TestLeaf')
await page.locator('#createLeadForm_firstName').fill('kalpoo')
await page.locator('#createLeadForm_lastNameLocal').fill('Allu')
await page.locator('#createLeadForm_personalTitle').fill('Mrs')
await page.locator('#createLeadForm_generalProfTitle').fill('QA')
await page.locator('#createLeadForm_annualRevenue').fill('1000000')
await page.locator('#createLeadForm_departmentName').fill('Testing')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210')
await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);

});
await page.locator("input[value='Create Lead']").click();
await page.close();
})