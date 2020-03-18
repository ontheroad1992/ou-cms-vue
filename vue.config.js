const theme = require("./theme");

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
