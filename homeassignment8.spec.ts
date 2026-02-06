import { test, expect } from '@playwright/test';

test('Edit individuals in Salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@name='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    
    await page.waitForTimeout(5000)
    await page.locator("//button[@class='slds-button slds-button_neutral search-button slds-truncate']").click()
    await page.getByRole('option', { name: 'Individuals' }).click()
    
    await page.locator("//input[@name='Individual-search-input']").fill('Allu')
    await page.waitForTimeout(5000)

    
    
    await page.locator("(//a[@class='slds-button slds-button--icon-x-small slds-button--icon-border-filled'])[2]").click()
    //await page.getByTitle('Show 2 more actions').click()
    await page.getByRole('menuitem', { name: 'Edit' }).click()
    
    await page.waitForTimeout(5000)

    await page.getByRole('combobox', { name: 'Salutation' }).click()
    await page.getByText('Mr.').click()
    await page.getByPlaceholder('First Name').fill('Peter')
    await page.waitForTimeout(5000)

    await page.locator("//span[text()='Save']").click()
    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='Individual']")).toBeVisible()

    await page.close()

})