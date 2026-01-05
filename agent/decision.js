function decide(info) {
    if (info.login) {
      return 'login';
    }
  
    if (info.next) {
      return 'next';
    }
  
    return 'stop';
  }
  
  module.exports = { decide };
  