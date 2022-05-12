# 用 Vue3 开发高复用、低耦合的管理后台的列表页
常见的管理后台系统的有 3 个特点：
1. 页面数量多。
2. 相似页面多。
3. 页面业务复杂。

## 问题及解决方案
开发相似的复杂页面，如果采用复制粘贴的方式，会出现大量的重复代码。每次改动相似部分，都会产出巨大的工作量。以下面两个场景为例：

场景1: 给所有列表页的搜索条件加重置功能  
如果 100 个列表页，则要加 100 个地方。

场景2: 第三方下拉框组件升级  
下拉框是用第三方组件。新的需求要升级下拉框组件。新版本的组件的 API 变了。要把所有组件都改一遍。

场景1 是复用少导致的的问题。可以通过提升代码复用性来解决。
场景2 是对第三方的耦合导致的。可以通过解耦来解决。

针对相似页面，用高复用、低耦合的方式来写，能极大的提升开发效率。本文用列表页为例，来构建高复用、低耦合的代码。

## 高复用
高重用代码的关键是单一职责。单一职责的关键是划分代码的职责。

将不同类型职责的代码放在一起。将职责可以分成以下几种类型：
1. 配置。 接口地址前缀，一页的数量。
1. 工具方法。
1. UI 组件。
1. 接口调用。
1. 数据和逻辑。
1. 通用业务组件。
1. 页面组件。

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