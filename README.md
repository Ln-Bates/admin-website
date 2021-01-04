# admin-website

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录说明

1. `apis` 接口文件夹
2. `assets` 文件资源
3. `components` 全局组件及通用组件 index.js 为全局组件注册入口
4. `layout` 布局页面
5. `resource` 资源( 指令, 混入, 插件 )
6. `router` 路由文件 菜单基于`routes`文件夹中 `index.js` 导出的 `children` 生成
7. `store` 全局状态管理
8. `styles` 样式及 scss 变量
9. `utils` 工具方法 `xx-helper` 为组件帮助方法
10. `views` 视图
