const path = require('path');

//拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variable.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('apis', resolve('src/apis'))
            .set('components', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('views', resolve('src/views'))
    },
}