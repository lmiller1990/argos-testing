import { globby } from "globby";
import { getPngs } from "../vrt";
import fs from 'node:fs/promises'
import { FullConfig } from "@playwright/test";

export default async function (config: FullConfig) {
  const now = new Date().getTime()
  await fs.writeFile("start", now.toString(), "utf-8");
  // const captureDir = await fs.mkdir('.janus')
  // console.log(await getPngs());
  console.log("Starting!");
  // console.log("Png images are", images)
}
