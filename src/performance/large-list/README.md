# 长列表优化
## 问题
长列表指列表包含的子项很多的列表。长列表会导致的问题是，DOM 数量多，页面卡顿。

## 解决方案
减少 DOM 的数量。常见的两种方案:
1. 分页。
  1. [react-paginate](react/react-paginate): 基于 React。
2. 虚拟列表。 复用 DOM 节点，渲染当前可视范围内及部分相邻的子项。Demo:
  2. [react-window](react/react-window): 基于 React。
