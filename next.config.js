const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'sass')],
    prependData: `@import "./assets/sass/abstractVariables";`,
  },
};
