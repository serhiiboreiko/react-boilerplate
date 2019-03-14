const fs = require('fs');
const Convert = require('ansi-to-html');

const generateTests = (tests) => {
  const template = fs.readFileSync('./jest-config/test.html', 'utf8');
  const convert = new Convert();

  console.log(tests);

  return tests.map(test => {
    const info = {
      name: test.title,
      status: test.status,
      error: convert.toHtml(test.failureMessages[0]),
    };

    return Object
      .keys(info)
      .reduce((report, key) => report.replace(new RegExp(`{{${key}}}`, 'g'), info[key]), template);
  }).join('');
};

class Reporter {
  constructor(config, options) {
    this.config = config;
    this.options = options;
  }

  generateHTMLReport(result) {
    const template = fs.readFileSync('./jest-config/template.html', 'utf8');

    const testSuites = result.testResults.map(testSuite => ({
      path: testSuite.testFilePath.replace(__dirname.replace('jest-config', ''), ''),
      duration: testSuite.perfStats.end - testSuite.perfStats.start,
      status: (testSuite.numFailingTests === 0) ? 'passed' : 'fail',
      tests: generateTests(testSuite.testResults),
    }));

    console.log(testSuites);

    const mainInfo = {
      globalStatus: result.success ? 'passed' : 'fail',
      startDate: new Date(result.startTime).toString(),
      testSuitesFailed: result.numFailedTestSuites,
      testSuitesPassed: result.numPassedTestSuites,
      testSuitesTotal: result.numTotalTestSuites,
      testsFailed: result.numFailedTests,
      testsPassed: result.numPassedTests,
      testsTotal: result.numTotalTests,
      testSuites,
    };

    const a = this.options;

    const report = Object
      .keys(mainInfo)
      .reduce((report, key) => {
        const regex = new RegExp(`{{${key}}}`, 'g');

        return report.replace(regex, mainInfo[key]);
      }, template);

    // console.log(report);
  }

  onRunComplete(contexts, results) {
    const a = this.options;

    this.generateHTMLReport(results);

    fs.writeFileSync('./test.json', JSON.stringify(results));
  }
}

module.exports = Reporter;
