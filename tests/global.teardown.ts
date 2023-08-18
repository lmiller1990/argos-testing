import type { FullConfig } from "@playwright/test";
import fs from "fs/promises";
import { getModifiedScreenshots } from "@lmiller1990/janus";

export default async function (config: FullConfig) {
  // const testDirs = config.projects.map((x) => x.testDir);
  const start = await fs.readFile("./start", "utf-8");
  console.log(await getModifiedScreenshots(".", { after: Number(start) }));
  // console.log(config.rootDir, config)
  console.log("Done 1!");
  console.log("Done 2!");
  console.log("Done 3!");

  // glob for images
}
