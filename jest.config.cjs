/** @type {import('jest').Config} */
module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: process.env.RESULTS_DIR || 'TestResults',
        outputName: 'junit.xml',
      },
    ],
  ],
};

