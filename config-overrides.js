const { addBabelPlugins, override } = require('customize-cra') // eslint-disable-line

module.exports = override(
  ...addBabelPlugins('babel-plugin-styled-components', 'lodash'),
)
