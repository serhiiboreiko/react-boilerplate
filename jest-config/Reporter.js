const fs = require('fs');
const path = require('path');
const Convert = require('ansi-to-html');

const generateTestsHTML = (tests) => {
  const template = fs.readFileSync('./jest-config/test.html', 'utf8');
  const convert = new Convert();

  return tests.map(test => {
    const info = {
      name: test.title,
      status: test.status,
      error: test.failureMessages.length
        ? convert.toHtml(test.failureMessages[0]).replace(/(\#fff|#ffffff|white|#FFF|#FFFFFF)/g, '#141413')
        : '',
    };

    return Object
      .keys(info)
      .reduce((report, key) => report.replace(new RegExp(`{{${key}}}`, 'g'), info[key]), template);
  }).join('');
};

const generateTestSuitesHTML = (testSuites) => {
  const template = fs.readFileSync('./jest-config/test-suite.html', 'utf8');

  return testSuites.map(testSuite => {
    const info = {
      path: testSuite.testFilePath.replace(__dirname.replace('jest-config', ''), ''),
      duration: testSuite.perfStats.end - testSuite.perfStats.start,
      status: (testSuite.numFailingTests === 0)
        ? 'passed'
        : 'fail',
      tests: generateTestsHTML(testSuite.testResults),
    };

    return Object
      .keys(info)
      .reduce((report, key) => report.replace(new RegExp(`{{${key}}}`, 'g'), info[key]), template);
  }).join('');
};

const generateHTMLReport = (result) => {
  const template = fs.readFileSync('./jest-config/template.html', 'utf8');

  const testSuites = generateTestSuitesHTML(result.testResults);

  const mainInfo = {
    ...result,
    globalStatus: result.testResults.every(testSuite => testSuite.numFailingTests === 0) ? 'passed' : 'fail',
    startTime: new Date(result.startTime).toString(),
    testSuites,
  };

  return Object
    .keys(mainInfo)
    .reduce((report, key) => {
      const regex = new RegExp(`{{${key}}}`, 'g');

      return report.replace(regex, mainInfo[key]);
    }, template);
};

class Reporter {
  constructor(config, options) {
    this.config = config;
    this.options = options;
  }

  onRunComplete(contexts, results) {
    const { dirname = './jest-output/test-results/' } = this.options;

    const html = generateHTMLReport(results);

    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }

    fs.writeFileSync(path.join(dirname, 'results.html'), html);
    fs.writeFileSync(path.join(dirname, 'results.json'), JSON.stringify(results));
  }
}

module.exports = Reporter;
