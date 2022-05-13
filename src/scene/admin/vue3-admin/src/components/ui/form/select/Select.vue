<script setup lang="ts">
const props = withDefaults(defineProps<{
  allowClear?: boolean,
  [key: string]: any,
}>(), {
  allowClear: true
})
</script>

<template>
  <a-select v-bind="props">
    <slot />
  </a-select>
</template>
