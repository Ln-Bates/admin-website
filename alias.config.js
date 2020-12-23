/**
 * Created by bates on 19/2/11.
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      apis: resolve('src/apis'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
      views: resolve('src/views'),
      mixins: resolve('src/resources/mixins'),
      plugins: resolve('src/resources/plugins'),
      directives: resolve('src/resources/directives'),
    }
  }
};
