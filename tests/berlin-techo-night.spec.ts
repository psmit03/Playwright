import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(
    "https://posh.vip/e/berlin-techno-night-1yr-anniversary?t=btn"
  );

  // Expect a title to contain "Berlin Techno Night"
  await expect(page).toHaveTitle(/Berlin Techno Night/);
});
