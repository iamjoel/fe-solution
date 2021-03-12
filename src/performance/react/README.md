# React 性能优化
## 避免不必要的组件 Render
### 1. 避免 子组件的 state， props 没变，但父组件 Render 导致子组件 Render
父组件 Render 导致的 子组件 Render，即使子组件的 state， props 没变。

用 PureComponent 和 React.memo 可以避免这种情况下的 Render。类组件用 PureComponent，函数组件用React.memo。 注意：PureComponent 对 Props 和 State 进行浅比较，React.memo 对 Props 进行浅比较。

### 2. 避免 函数组件中 内容没变的派生状态或函数变化时，导致子组件 Render
函数组件中的函数，每运行一次，都会生成一个新的函数。如果这个函数是某个子组件的属性，会导致子组件 Render。

用 useCallback 可以避免这种情况下的 Render。

### 3. 中间属性变化时，避免 中间组件的 Render

### 4. 批量更新: 减少 Render 次数
对于类组件，在 React 管理的事件回调和生命周期中，setState 是异步的，而其他时候 setState 都是同步的。
```js
this.setState({a: 3})
this.setState({b: 4})

// 优化成
this.setState({a: 3, b: 4})
```

对于函数组件，


## 避免不必用的 DOM 更新
### 避免不必用的列表项 DOM 更新
列表项使用 key 属性。


## 参考
* [React 性能优化 | 包括原理、技巧、Demo、工具使用](https://juejin.cn/post/6935584878071119885)