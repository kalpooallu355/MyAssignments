import test from '@playwright/test'

test('Create Lead in Salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@name='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)
    await page.locator("//div[@class='slds-icon-waffle']").click()
    
    await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none']").nth(1).click();
    
    await page.locator("//a[@title='Leads']").click();
    await page.locator("//div[@title='New']").click();

    await page.locator("(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])[2]").click()
    await page.locator("//span[contains(text(), 'Mrs')]").click()  // adjust selector if needed
    await page.locator("//input[@name='lastName']").fill("allu")
    await page.locator("//input[@name='Company']").fill("TestLeaf")
   
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(5000)
    await page.locator("//slot[text()='Lead']").isVisible()
    await page.close()
})
