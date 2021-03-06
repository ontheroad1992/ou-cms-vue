const path = require("path");
const webpack = require("webpack");
// const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

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
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      // new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": resolve("./src/plugins/antd/icons.js")
      }
    }
  }
  // chainWebpack: config => {
  //   // ant-design-vue 的 icon 按需加载
  //   // const svgRule = config.module.rule("svg");
  //   // svgRule.uses.clear();
  //   // svgRule
  //   //   .use("babel-loader")
  //   //   .loader("babel-loader")
  //   //   .end()
  //   //   .use("vue-svg-loader")
  //   //   .loader("vue-svg-loader");
  // }
};
