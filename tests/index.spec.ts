// https://playwright.dev/docs/test-retries#reuse-single-page-between-tests

import { test, expect, type Page } from '@playwright/test';
import { describe } from 'node:test';

const baseURL = 'https://dyallab.com.ar';

test.describe.configure({ mode: 'serial' });

let page: Page;

describe('Index Page', () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto(baseURL);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('the page has a title', async () => {
        await expect(page).toHaveTitle('Dyallab | Start small grow big');
    });

})