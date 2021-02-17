# CSS Modules
配置: [webpack.config.js](config/webpack.config.js)。
```js
const cssRegex = /\.css$/;
const excludeCssModuleRegex = /\.global\.css$/
// 文件名中带 .global. 的 css 用 css-loader， 其他 css 文件用 css modules 处理
{
  test: [excludeCssModuleRegex, /node_modules/],
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  }),
  sideEffects: true,
},
{
  test: [excludeCssModuleRegex, /node_modules/],
  exclude: excludeCssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
    localsConvention: 'camelCase',
    modules: {
      getLocalIdent: getCSSModuleLocalIdent,
    },
  }),
},
```

全局样式写法: 
```css
:global(选择器) {
  // 内容
}
```

## 文档
* [官网](https://github.com/css-modules/css-modules)
