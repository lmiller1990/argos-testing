import { expect } from "@playwright/test";
import { test } from "../fixture";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/docs/api/class-test#test-after-each");
});

test("test 1", async ({ page, janus }, info) => {
  await expect(
    page.getByRole("heading", { name: "test.afterEach" })
  ).toBeVisible();
  console.log("Writing!!!")
  await page.screenshot({ path: "bar123.png" });
  await janus.snapshot({ name: 'foobar.png' });
});
