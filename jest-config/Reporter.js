const fs = require('fs');
const path = require('path');

class Reporter {
  constructor(config, options) {
    this.config = config;
    this.options = options;
  }

  onRunComplete(contexts, results) {
    const { dirname = './jest-output/test-results/' } = this.options;

    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }

    fs.writeFileSync(path.join(dirname, 'results.json'), JSON.stringify(results));
  }
}

module.exports = Reporter;
