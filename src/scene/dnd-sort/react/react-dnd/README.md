# react DnD Demo
## 启动
`yarn start`

## 概念
### Monitor
对象包含拖放的属性。在 collect 传入的参数上可以拿到。

一些属性:
* getItem(): beginDrag 返回的对象
* getClientOffset(): 位置
* canDrop()
* isOver()

### Connectors
包含了拖放元素的 DOM 的属性。在 collect 传入的参数上可以拿到。

一些属性：
* dropTarget()

### Spec
定义了事件处理。

Drag Sources 时: 
* beginDrag(props, monitor, component): 开始拖动时触发。 返回值，在 monitor.getItem 时可以拿到。
* endDrag(props, monitor, component):  可选。结束拖动时触发。
* canDrag(props, monitor)  可选。来控制是否可拖动。
* isDragging(props, monitor): 可选

### Drag Sources
拖的元素。

属性:
* type: Drag 元素和 Drop 元素 匹配起来靠相同的 type 值。
* collect: 给子组件加属性，如 `isDragging` 等。返回的对象就是加到子组件上的额外属性。回调里可以拿到 Monitor 和 Connectors


### Drop Targets
放的元素。

## 文档
* [文档](https://react-dnd.github.io/react-dnd/about)
* [官网](https://github.com/react-dnd/react-dnd/)