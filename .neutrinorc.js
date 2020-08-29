const typescript = require('neutrinojs-typescript');
const typescriptLint = require('neutrinojs-typescript-eslint');
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
