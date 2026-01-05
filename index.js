const { openBrowser } = require('./agent/browser');
const { observePage } = require('./agent/observer');
const { decide } = require('./agent/decision');
const { openLogin, openNext } = require('./agent/actions');
const { log } = require('./agent/logger');

(async () => {
  const { browser, page } = await openBrowser();

  await page.goto('https://quotes.toscrape.com');
  await page.waitForLoadState('domcontentloaded');

  const info = await observePage(page);
  log('observe ' + JSON.stringify(info));

  const choice = decide(info);
  log('decide ' + choice);

  if (choice === 'login') {
    await openLogin(page);
    log('action login');
  }

  if (choice === 'next') {
    await openNext(page);
    log('action next');
  }

  await page.waitForTimeout(5000);
  await browser.close();
})();
