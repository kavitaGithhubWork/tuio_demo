# Tuio Demo Project

This project is a demonstration of using Playwright for end-to-end testing of a web application that handles creating and managing financial transfers with various tax calculations.

## Project Description

The Tuio Demo project is designed to test the functionality of a web application that allows users to create transfers with different sales tax rates and verify the correct calculation and status updates.

## Setup Instructions

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- Git

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/kavitaGithhubWork/tuio_demo.git
   cd tuio_demo
Install dependencies:

sh
Copy code
npm install
Configuration
Ensure that your Playwright configuration file (playwright.config.ts) is set up with the correct base URL:

typescript
Copy code
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://qa.interview.tuio.dev',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;
Usage
Running the Tests
To run the Playwright tests, use the following command:

npx playwright test


Project Structure

tests/demo.spec.ts: Contains the Playwright test cases.
playwright.config.ts: Configuration file for Playwright.


Acknowledgments
Thanks to Playwright for the awesome testing framework.
