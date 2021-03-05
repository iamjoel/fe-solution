# 列表滚动无限加载
## 场景
列表滚动无限加载只在滚动到列表底部时，加载下一页的数据。相比拿所有数据都渲染出来，这么做服务器的返回速度更快，对服务器端压力更小，前端渲染的节点也变少的，滚动会比较流畅。

如果数据特别多，导致滚动卡顿，可以用虚拟列表来优化。

## 解决方案
列表滚动无限加载主要解决：如何判断列表滚动到底部。列表滚动到底部时，列表的总高度 减去 已滚动的高度 为 列表视口的高度。用 DOM 的 API 表述为:
```js
// 列表的总高度
const totalHeight = listDOM.scrollHeight
// 已滚动的高度
const scrollTop = listDOM.scrollTop
// 视口的高度
const clientHeight = listDOM.clientHeight
// 滚动到底部了
if (totalHeight - clientHeight === scrollTop) {
    loadMore()
}
```

[Demo](react/vanilla/src/App.tsx)