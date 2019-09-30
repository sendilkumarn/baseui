/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const {getPuppeteerUrl} = require('../../../e2e/helpers');

const Differencify = require('differencify');

it('testing normal stuff', async () => {
  await page.goto(getPuppeteerUrl('button'));
  await page.waitFor('#root');
});

describe('differencify', () => {
  const differencify = new Differencify({debug: true});

  beforeAll(async () => {
    await differencify.launchBrowser({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  });

  afterAll(async () => {
    await differencify.cleanup();
  });

  it('button', async () => {
    await differencify
      .init()
      .launch()
      .newPage()
      .goto(getPuppeteerUrl('button'))
      .screenshot()
      .toMatchSnapshot()
      .close()
      .end();
  });
});

/*
const vrt = require('../../../vrt');

const hoverTests = ['primary', 'secondary', 'tertiary', 'minimal'].map(
  kind => ({
    testName: `hover-${kind}`,
    ux: async function(page) {
      await page.hover(`[data-vrt-id="button-${kind}"]`);
    },
  }),
);

vrt.test({
  name: 'button',
  interactions: [...hoverTests],
});
*/