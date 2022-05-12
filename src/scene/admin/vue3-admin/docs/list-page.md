# 用 Vue3 开发高复用、低耦合的管理后台的列表页
常见的管理后台系统的有 3 个特点：
1. 页面数量多。
2. 相似页面多。
3. 页面业务复杂。

## 问题
开发相似的复杂页面，如果采用复制粘贴的方式，会出现大量的重复代码。每次改动相似部分，都会产出巨大的工作量。以下面两个场景为例：

场景1: 给所有列表页的搜索条件加重置功能  
如果 100 个列表页，则要加 100 个地方。

场景2: 第三方下拉框组件升级  
下拉框是用的第三方组件。新的需求要升级下拉框组件。改动的成本比较大，找了个支持特性的新组件。

要解决上面的问题，用高复用 和 低耦合。

## 解决方案
开发针对相似页面。能极大的提升开发效率。
列表页，数量大，相似度高。

## 高复用
高复用指的是：在相似业务场景下，用的是同一份代码。

高重用的代码可以减少重复劳动。具体来说，有两个方面：
1. 将相似封装成可重用的代码，做新页面时，可减少重复劳动。管理后台的不同列表页中有很多类似部分：UI，交互和功能。
2. 可以减少因需求变动，导致多次改动和漏改的情况。

### 具体做法
要写出高重复代码，关键就是划分代码的职责。

将不同类型职责的代码放在一起。将职责可以分成以下几种类型：
* 配置。 接口地址前缀，一页的数量。
* 工具方法。
* UI 组件。
* 接口调用。
* 数据和逻辑。
* 通用业务组件。
* 页面组件。

## 低耦合
低耦合关键是，依赖对外的接口，而不是细节。

解藕的方式是加中间适配层。用适配层来减少变化。

### 对 UI 组件的解藕
在。

#### 传属性
```js
<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-input v-bind="props" />
</template>
```

设置默认值。比如，希望按钮组件的默认的`type`属性的是`primary`。
```js
const props = withDefaults(defineProps<{
  type?: string,
  [key: string]: any,
}>(), {
  type: 'primary'
})
```


#### 带插槽的组件
```js
<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-sub-menu v-bind="props">
    <template #icon><slot name="icon" /></template>
    <template #title><slot name="title" /></template>
    <slot />
  </a-sub-menu>
</template>
```

调用实例的方法。比如表单组件，要调用实例方法。
```js
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  [key: string]: any,
}>()
const vmRef = ref(null)

defineExpose({
  form: vmRef
})
</script>

<template>
  <a-form v-bind="props" ref="vmRef">
    <slot />
  </a-form>
</template>
```

尝试了直接把 `vmRef` 实例上的解构了传出来：
```js
defineExpose({
  ...vmRef
})

或 
defineExpose({
  ...vmRef
})
```
没有成功。

外部用
```js
const validRes = await formRef.value.form.validate()}
```

### 接口工具调用的接口


https://cloud.tencent.com/developer/inventory/15387