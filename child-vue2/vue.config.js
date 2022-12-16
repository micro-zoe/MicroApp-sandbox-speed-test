module.exports = {
  publicPath: '/',
  outputDir: 'vue2',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 3001,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,

  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-chile-vue2`,
      // globalObject: 'window',
      library: `table`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    }
  },
}
