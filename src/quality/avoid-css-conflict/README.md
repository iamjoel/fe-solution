# 全局样式污染解决方案
## 问题
由于 CSS 都是全局的，因此在大项目中容易出现样式污染的问题。

## 解决方案
可以通用用程序生成全局不冲突(即唯一的)的选择器来解决样式污染的问题。

Vue 栈推荐使用 [Scoped CSS](vue/scoped-css/README.md)

React 栈推荐使用 [CSS Modules](react/css-modules/README.md) 和 [CSS in JS](react/css-in-js/README.md)