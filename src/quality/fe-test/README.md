# 前端测试
## 场景
这边指的测试是指白盒测试，用代码来测试代码。

测试有利于提升代码质量。
* 代码功能和需求一致。根据需求，写测试。测试通过了，则表明需求实现了。
* 保证代码重构后，未改坏以前的功能。代码重构后，能通过原有的测试。

测试的另一个好处是，可以通过现有测试，来直观的了解需求。

## 解决方案
### 测试类型
根据测试对象类型不同，测试包含如下类型：
* 单元测试
* UI 测试
* 接口测试

#### 单元测试
单元测试的测试对象主要是函数和组件。

测试传不同的参数或属性值，返回值是否和预期一致，报错情况是否与预期一致，回调函数的执行情况是否和预期一致，造成的副作用是否和预期一致。副作用包括 DOM 操作，BOM 操作。

用 Jest 测试函数的 [Demo](./jest/src)。

在 React 中测试组件的 [Demo](./react/jest/src/components/counter.spec.js)

#### UI 测试
UI 测试的测试对象是 UI。

测试在页面未做过交互或交互(如点击，输入）后，UI 的结果是否和预期一致。

手写 UI 测试用例工作量很大。常用的 2 种 替换方式是：截图比较(Snapshot Testing) 和 UI 自动化测试。

截图比较是当前程序生成的 UI 的截图 和 之前程序生成的 UI 的截图比较。第一次运行程序要生成截图。当 UI 改动后，可以更新截图。截图适用用检查代码重构后，是否改坏了 UI。在 React 测试截图的 [Demo](./react/jest/src/components/screenshot.spec.js)

UI 自动化测试 需要 录制测试脚本。根据测试脚本生成对应的测试用例代码。以后每次运行测试用例，就是执行录制脚本中的操作。具体看 UI 自动化录制工具: [UI Recorder](https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md)。

#### 接口测试
接口测试的测试对象是 API 接口。

调 API 接口，传不同的参数，接口返回的结果是否和预期一致。

### 衡量测试的效果
用测试覆盖率来衡量测试的效果。

### 工具库
* 测试框架
  * [Jest](https://jestjs.io/)。 VSCode 插件
    * [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) 单独运行某个用例
    * [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
  * Mocha
* 断言库
  * [Power-asset](https://github.com/power-assert-js/power-assert)
  * [Chai](https://www.chaijs.com/)
* Spies，Stub, Mock, Fake 等
  * [SINON.JS](https://sinonjs.org/)
* E2E 测试
  * [Enzyme](https://github.com/enzymejs/enzyme)
  * [cypress](https://www.cypress.io/)
  * [Nightwatch.js](https://nightwatchjs.org/)
* 无头浏览器
  * [Puppeteer](https://github.com/puppeteer/puppeteer)
  * [PhantomJS](https://phantomjs.org/)
* UI 自动化工具
  * [UI Recorder](https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md)
* 测试覆盖率
  * [istanbul](https://istanbul.js.org/)