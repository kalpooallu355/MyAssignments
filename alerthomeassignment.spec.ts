import test from '@playwright/test'

test("Alert handling in w3 school", async ({ page}) => {

     page.once ('dialog', alertType => {

        const type = alertType.type()
        console.log("Alert type is:", type)

        const message = alertType.message()
        console.log("Alert message is:", message)

        alertType.accept("")

     })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
   const frame = page.frameLocator('#iframeResult');

  await frame.getByRole('button', { name: 'Try it' }).click();




})






