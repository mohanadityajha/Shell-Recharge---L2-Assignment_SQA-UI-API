const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/');
});

test.describe(' Login the E-Commerce Site', () => {

  test('Login Functionality Test with Enter the UserName and Password', async ({ page }) => {

    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('E-Mail Address').fill('mohanadityajha@gmail.com');
    await page.getByPlaceholder('Password').fill('Test@2024');
    await page.getByRole('button', { name: 'Login' }).click();

  });
  test('Find the Product Searching by Product Name', async ({ page }) => {
    
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('Samsung Galaxy Tab 10.1');
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('heading', { name: 'Samsung Galaxy Tab 10.1', exact: true }).getByRole('link').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
})
  
  test("Find the Product by Model Name", async ({ page }) => {

    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('941BW');
    await page.getByRole('button', { name: '' }).click();
    await page.getByText('Samsung SyncMaster 941BW').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
  })

  test("Find the Product searching by Color", async ({ page}) => {
    
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('BW');
    await page.getByPlaceholder('Search').click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByText('Samsung SyncMaster 941BW').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();

  })
  
  test('Find the Product thought Menu Bar and Category Option', async ({ page }) => {

    await page.getByRole('link', { name: 'Tablets' }).click();
    await page.getByRole('heading', { name: 'Samsung Galaxy Tab' }).getByRole('link').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.getByText('Success: You have added').click();

  })

  
})

