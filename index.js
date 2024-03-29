/**
 * @file
 *
 * Custom webpack loader to parse theme breakpoints yaml.
 * Fork from https://github.com/okonet/yaml-loader
 */

const yaml = require('js-yaml');
const breakpoints = require('./parse-breakpoints');

module.exports = (source, themeName) => {
  this.cacheable && this.cacheable();

  try {
    const res = yaml.safeLoad(source);
    const parsed = breakpoints.parseToJs(res, themeName);
    return `module.exports = ${parsed};`;
  } catch (err) {
    this.emitError(err);
    return null;
  }
};
