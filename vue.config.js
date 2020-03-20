// const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const theme = require("./theme");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

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
  },
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": resolve("./src/plugins/antd/icons.js")
      }
    }
  },
  chainWebpack: config => {
    // lodash 按需加载
    // config.plugin("lodashWebpackPlugin").use(LodashModuleReplacementPlugin);

    // ant-design-vue 的 icon 按需加载
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  }
};
