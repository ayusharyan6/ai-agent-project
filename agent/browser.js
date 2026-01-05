const { chromium } = require('playwright');

async function openBrowser() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  return { browser, page };
}

module.exports = { openBrowser };
