import { test, expect } from '@playwright/test';

test('Create individuals in Salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@name='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    
    await page.locator("//button[@class='slds-button slds-button_neutral search-button slds-truncate']").click()
    await page.getByRole('option', { name: 'Individuals' }).click()
    await page.locator("//a[@title='New']").click()
   


    await page.waitForTimeout(5000)
    await page.getByRole('combobox', { name: 'Salutation' }).click()
    await page.getByText('Mrs.').click()
    await page.getByPlaceholder('Last Name').fill('Allu')
    await page.waitForTimeout(5000)

   
    await page.locator("//span[text()='Save']").click()
    //await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='Individual']")).toBeVisible()

    await page.close()
})