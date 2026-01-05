async function openLogin(page) {
    await page.click('a[href="/login"]');
  }
  
  async function openNext(page) {
    await page.click('li.next a');
  }
  
  module.exports = { openLogin, openNext };
  