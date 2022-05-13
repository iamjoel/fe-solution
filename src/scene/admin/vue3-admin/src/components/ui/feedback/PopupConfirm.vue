<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-popconfirm v-bind="props">
    <slot />
  </a-popconfirm>
</template>
