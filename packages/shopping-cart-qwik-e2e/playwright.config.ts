import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  outputDir: 'dist',
  webServer: {
    cwd: '../../',
    command: 'nx run shopping-cart-qwik:serve --port 5000',
    port: 5000,
    timeout: 50000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    trace: 'on',
    baseURL: 'http://localhost:5000/',
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};
export default config;
