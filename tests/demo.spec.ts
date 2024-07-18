import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

test.describe('Describe block', () => {
    let uniqueDetail: string;
    let uniquePrice: string;

    test.beforeEach(async ({ page }) => {
        uniqueDetail = `NewRecord_${faker.datatype.uuid()}`;
        uniquePrice = faker.commerce.price(1, 1000, 2);
        
        await page.goto('/?page=1&limit=25&sortName=id&sortDirection=desc');
        await page.getByRole('button', { name: ' Create transfer ' }).click();
        await expect(page.getByLabel('Add transfer')).toBeVisible();
    });

    test('Verify data is added to the table - when sales tax is 0 ', async ({ page }) => {
        await page.getByLabel('Details').fill(uniqueDetail);
        await page.getByLabel('Price').fill(uniquePrice);
        await page.locator('label:has-text("None - 0%")').click();
        await page.getByRole('button', { name: 'Add' }).click();

        await expect(page.getByText(uniqueDetail)).toBeVisible();
    });

    test('Verify data is added to the table - when sales tax is 5 percent ', async ({ page }) => {
        await page.getByLabel('Details').fill(uniqueDetail);
        await page.getByLabel('Price').fill(uniquePrice);
        await page.locator('label:has-text("GST - 5%")').click();
        await page.getByRole('button', { name: 'Add' }).click();

        await expect(page.getByText(uniqueDetail)).toBeVisible();
    });

    test('Verify data is added to the table - when sales tax is 15 percent ', async ({ page }) => {
        await page.getByLabel('Details').fill(uniqueDetail);
        await page.getByLabel('Price').fill(uniquePrice);
        await page.locator('label:has-text("HST - 15%")').click();
        
        await page.getByRole('button', { name: 'Add' }).click();

        await expect(page.getByText(uniqueDetail)).toBeVisible();
    });

    test('Verify user is able to click on Mark Resolve and change the status from Pending to Success', async ({ page }) => {
        await page.getByLabel('Details').fill(uniqueDetail);
        await page.getByLabel('Price').fill(uniquePrice);
        await page.locator('label:has-text("HST - 15%")').click();
        await page.getByRole('button', { name: 'Add' }).click();
        await expect(page.getByText(uniqueDetail)).toBeVisible();
        const createdRow = page.locator(`tr:has-text("${uniqueDetail}")`);
        await createdRow.locator('button[aria-haspopup="true"]').click();
        await page.getByRole('menuitem', { name: 'Mark resolved' }).click();
        
        const statusCell = createdRow.locator('td').nth(3); 
        await expect(statusCell).toHaveText('success');
    });


    //Please Note: this code does not contain all possible testcase that we should automate as part of regression. 
    //This is a demo of work that should be done 

});
