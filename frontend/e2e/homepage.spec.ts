import { test, expect } from "@playwright/test";

test("should display the correct page title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});

test("should display backend health status", async ({ page }) => {
  await page.goto("/");

  const healthStatus = page.getByRole("paragraph");
  await expect(healthStatus).toHaveText(
    'Health: {"status":"healthy","message":"FastAPI backend is running","environment":"development","version":"1.0.0"}',
  );
});
