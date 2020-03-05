const theme = require("./theme");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    }
  }
};
