module.exports = function (config) {
  config.set({

    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      'src/**/*.ts',
      'src/**/*.tsx',
      'test/**/*.ts',
      // 'test/**/*.tsx',
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript'],
      '**/*.tsx': ['karma-typescript'],
    },

    reporters: ['progress', 'karma-typescript'],

    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      reports: {
        'html': 'coverage',
        'lcovonly': 'lcov',
        'text-summary': ''
      }
    },

    browsers: ['Firefox'],
  });
};