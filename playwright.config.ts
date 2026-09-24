import { defineConfig, devices } from '@playwright/test';
import { dot } from 'node:test/reporters';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
testDir: 'tests',
  /* To Change Timeout globally for all tests */
  // timeout:40000,
  /* To apply a longer wait for all expect conditions*/
  // expect:{timeout:4000},
  /* Run tests in files in parallel */
     fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
     forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0, // Enable retry for CI integrations 
  // retries: 1, 
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
     workers :2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
     reporter:'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  // grep: /(?=.*@sanity)|(?=.*@regression)/, 
  // grepInvert : /(@sanity)/,
use: {

  screenshot:'on',
  // video:'on',
  /* Base URL to use in actions like `await page.goto('')`. */
    
  // video:'retain-on-failure',
  // baseURL: 'http://localhost:3000',

  // viewport: {width:1280 , height:720},
    
  /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  // trace:'on', //retain on failure's -->trace the failure & replace new file by removing old file
  },

  /* Configure projects for major browsers */
projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, 
*/
  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
