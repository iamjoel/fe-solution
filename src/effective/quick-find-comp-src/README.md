# 快速找到组件对应的源代码
## 问题
大型项目中，找页面上的 UI 对应的组件源码很花时间。

## 解决方案
### React
#### 方案1: 点击组件，跳转到 VSCode 中的组件源码
可以用第三方库: [React Dev Inspector
](https://github.com/zthxxx/react-dev-inspector) 来实现。

原理介绍: [我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘。](https://juejin.cn/post/6901466406823575560)

[Demo](react/react-dev-inspector/README.md)
#### 方案2: 在浏览器审查查看组件的名称
用浏览器插件 [React Developer Tools](https://github.com/zthxxx/react-dev-inspector) 来实现。然后用组件名在项目中全局搜索。

### Vue
#### 方案1: 在浏览器审查查看组件的名称
用浏览器插件 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN) 来实现。然后用组件名在项目中全局搜索。
