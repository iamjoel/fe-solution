# 用工具 CSS 来快速写样式
## 场景
工具类 CSS 是定义了很多工具样式的类名，代码只的主要样式都工具类。例如: 
```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

用工具类写 CSS 可以写样式更快。 原因：
* 专注在 HTML，不需要切换到 CSS 文件中。
* 节约起类名的时间。

其他优点:
* CSS 总体积文件比较小。

缺点: 
* 学习成本。
* 增加项目的复杂度。

## 解决方案
可以用 [tailwind CSS](https://tailwindcss.com/)。 tailwind CSS 包含了 尺寸，颜色，背景，响应式，hover，focus 伪类等各种工具类。 也支持修改工具类的配置，自定义工具类，删除没用到工具 CSS(Purge 功能) 等功能。

[Demo](./react/tailwind/src/App.tsx)。