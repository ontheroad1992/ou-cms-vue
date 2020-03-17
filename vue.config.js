const theme = require("./theme");
require("./mock");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    }
  }
};
