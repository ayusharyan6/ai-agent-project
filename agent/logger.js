const fs = require('fs');

function log(text) {
  fs.appendFileSync('logs/run.log', text + '\n');
}

module.exports = { log };
