module.exports = {
  reporters: [
    'default',
    ['./jest-config/Reporter.js', {
      pageTitle: 'Tests Report',
      outputPath: './jest-output/tests-results.html',
      theme: 'lightTheme',
      includeFailureMsg: true,
    }],
  ],
  // collectCoverage: true,
  // coverageDirectory: './jest-output/coverage',
};
