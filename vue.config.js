const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
// todo 优化项 是否需要cdn加载文件
//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    // 注入变量
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variable.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('apis', resolve('src/apis'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('mixins', resolve('src/resources/mixins'))
      .set('plugins', resolve('src/resources/plugins'))
      .set('directives', resolve('src/resources/directives'));
    if (isProduction) {
      // 压缩图片
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({bypassOnDebug: true})
        .end();

    }
  },
  configureWebpack: config => {
    if (isProduction) {
      return {
        plugins: [
          // 去除console.log
          new TerserPlugin({
            terserOptions: {
              compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log']
              }
            }
          })
        ],
      };
    }
  },
  productionSourceMap: false
};
