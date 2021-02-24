# CONTRIBUTING
## Pull Request
- 不要向 `main` 分支提 `pr`。

## 项目结构及文件命名规范
所有代码都放 `src` 下：
- src
  - quality: 代码质量
  - performance：性能优化
  - scene: 场景

具体的某个解决方案按照归属都放上面的文件夹中。

文件夹命名：`解决方案名/依赖框架/依赖第三方库名`。 如: `avoid-css-conflict/react/css-in-js`。不依赖框架或第三方库，命名为 `vanilla`。 如 `request/vanilla`。

## 解决方案 README
至少包含：
1. 问题或业务场景描述
2. 问题或业务场景对应的解决方案

## 代码脚手架
推荐用的代码脚手架。 Vue 用 vue-cli， React 用 create-react-app。

## 其他
尽量用 TypeScript。
