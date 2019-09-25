/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow
/*eslint-env node*/
// Copied from e2e config
module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/', './babel/cup.js'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  preset: 'jest-puppeteer',
  testRunner: 'jest-circus/runner',
  testRegex: 'vrt.js$',
  transformIgnorePatterns: ['./babel/cup.js'],
  reporters: [
    'default', // keep the default reporter
    [
      'differencify-jest-reporter',
      {
        debug: true,
        reportPath: 'differencify_reports', // relative to root of project
        reportTypes: {
          html: 'index.html',
          json: 'index.json',
        },
      },
    ],
  ],
};
