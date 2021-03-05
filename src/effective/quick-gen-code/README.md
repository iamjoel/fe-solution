# 快速生成代码
## 场景
快速生成代码可以减少枯燥的重复劳动(如 创建文件，复制粘贴)，提少出错，提升开发效率。

## 解决方案
快速生成代码可以分成以下场景。

### 场景1: 生成项目初始代码
主流框架都有官方的生成项目初始代码工具。React 的是 [Create React App](https://create-react-app.dev/)。 Vue 的是 [Vue CLI](https://cli.vuejs.org/zh/)。

这些工具也都支持自定义项目初始代码。

## 场景2: 在项目内生成 模块/页面/组件 的初始代码
在 React 项目中，要创建一个组件，需要创建一个文件夹， 下面放 `index.tsx` 和 `style.scss`。 用 [Plop](https://www.npmjs.com/package/node-plop) 可以根据自定义的模板，生成模块/页面/组件 的初始代码。

Demo 见 [这里](react/plop/README.md)

### 场景3: 创建代码片段
可以用 IDE 的代码片段工具，自定义代码片段。如 VS Code 的 [Code snippets](https://docs.microsoft.com/en-us/visualstudio/ide/code-snippets?view=vs-2019)。

也可以别人写好的代码片段插件，如 [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)。