// Prints cv/cv.html to public/cv-matthew-grygar.pdf with the system Chrome.
// Run: node cv/build.cjs   (needs puppeteer-core resolvable, e.g. via NODE_PATH)
const path = require("path");
const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "cv.html").replace(/\\/g, "/"), { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, "..", "public", "cv-matthew-grygar.pdf"),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
})();
