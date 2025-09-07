

// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',          //path of the files to be exuecuted 
  timeout: 40 * 1000,          //this is in milliseconds
  expect: {
    timeout: 4000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium'
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

});

