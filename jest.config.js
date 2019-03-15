module.exports = {
  collectCoverage: true,
  coverageDirectory: './jest-output/coverage',
  reporters: [
    'default',
    ['./jest-config/Reporter.js', {
      dirname: './jest-output/test-results/',
    }],
    ['jest-html-reporter', {
      outputPath: './jest-output/test-results/results.html',
      includeFailureMsg: true,
      theme: 'darkTheme',
    }],
  ],
};
