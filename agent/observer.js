async function observePage(page) {
    const text = await page.innerText('body');
  
    const info = {
      login: false,
      next: false,
      error: false
    };
  
    if (text.includes('Login')) {
      info.login = true;
    }
  
    if (text.includes('Next')) {
      info.next = true;
    }
  
    if (text.toLowerCase().includes('error')) {
      info.error = true;
    }
  
    return info;
  }
  
  module.exports = { observePage };
  