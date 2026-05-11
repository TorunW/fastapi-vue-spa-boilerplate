import { defineConfig, devices } from "@playwright/test";
import path from "path";

const absolutePathBackend = path.resolve(__dirname, "../backend");

export default defineConfig({
  testDir: "./e2e",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:5173",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /*   Run your local dev server before starting the tests*/
  webServer: [
    {
      command: `cd ${absolutePathBackend} && uvicorn app.main:app --host 127.0.0.1 --port 8000`,
      url: "http://127.0.0.1:8000",
    },
    {
      command: "pnpm dev --host 0.0.0.0",
      url: "http://127.0.0.1:5173",
    },
  ],
});
