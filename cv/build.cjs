// Prints the CVs with the system Chrome:
//   cv/cv.html    -> public/cv-matthew-grygar.pdf     (Czech)
//   cv/cv-en.html -> public/cv-matthew-grygar-en.pdf  (English)
// Run: node cv/build.cjs   (needs puppeteer-core resolvable, e.g. via NODE_PATH)
const path = require("path");
const puppeteer = require("puppeteer-core");

const CVS = [
  ["cv.html", "cv-matthew-grygar.pdf"],
  ["cv-en.html", "cv-matthew-grygar-en.pdf"],
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  for (const [src, out] of CVS) {
    const page = await browser.newPage();
    await page.goto("file://" + path.join(__dirname, src).replace(/\\/g, "/"), { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(__dirname, "..", "public", out),
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    await page.close();
  }
  await browser.close();
})();
