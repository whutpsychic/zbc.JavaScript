
const path = require('path');

module.exports = {
  entry: './es5/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};