const typescript = require('neutrino-typescript');
const typescriptLint = require('neutrino-typescript-eslint');
const node = require('@neutrinojs/node');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  use: [
    typescript({ declaration: true }),
    typescriptLint(),
    eslint(),
    jest(),
    node(),
  ],
};
