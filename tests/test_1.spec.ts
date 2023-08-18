import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("https://lmiller1990.github.io");
  await argosScreenshot(page, "homepage");
});
