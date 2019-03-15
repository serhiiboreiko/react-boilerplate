module.exports = {
  coverageReporters: ['json', 'lcov'],
  collectCoverage: true,
  coverageDirectory: './jest-output/coverage',
  reporters: [
    'default',
    ['jest-html-reporter', {
      outputPath: './jest-output/test-results/results.html',
      includeFailureMsg: true,
      theme: 'darkTheme',
    }],
  ],
};
