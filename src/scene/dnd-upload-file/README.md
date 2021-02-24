# 拖放上传文件
## 背景
拖放上传文件操作容易，快捷。用户体验好。

## 解决方案
可以用 [HTML 拖放 API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 来实现。需要注意的是，拖放时，进入目标元素的子元素时，也会触发 `dragLeave` 事件。

react 的实现: [Demo](react/vanilla/src/App.tsx)