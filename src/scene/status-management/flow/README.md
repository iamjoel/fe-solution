# 流式编程/响应式编程
> ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.
> Rx.JS


管理变更。数据随着交互在变更。有些变更会触发额外的业务逻辑。观察不同的数据变更，将变更进行组合（通过创建，操作符等）。

流，以时间为维度的数组。

## 操作
合并。
拆分。

## 其他
隔离应用状态。场景：按钮被点击的次数。
```js
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
```



## 场景
* inspecting the current state of the application,
* combining streams whose values are out of order,
* combining streams whose values could be incomplete,
* dealing with timeouts,
* dealing with out-of-date stream data,
* canceling in-flight stream operations,
* conditional behaviours with streams,
* retry mechanics.

[React and Rx.js - The Power Of Observable (FAQ) Netguru | Codestories](https://www.netguru.com/blog/react-rxjs)

## 缺点
调试不方便？

## 资源
* [Rx Overview](https://rxjs-dev.firebaseapp.com/guide/overview)
* [学习 Rxjs](https://www.learnrxjs.io/)
* [React and Rx.js - The Power Of Observable (FAQ) Netguru | Codestories](https://www.netguru.com/blog/react-rxjs)
* [RxJS with React Hooks for state management](https://blog.logrocket.com/rxjs-react-hooks-for-state-management/)

* [Rx marble 图](https://rxmarbles.com/)
* [imperative programming vs. declarative programming](https://ui.dev/imperative-vs-declarative-programming) 命令式 vs 声明式。