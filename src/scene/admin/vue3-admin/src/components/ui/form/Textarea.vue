<script setup lang="ts">
const props = withDefaults(defineProps<{
  allowClear?: boolean,
  [key: string]: any,
}>(), {
  allowClear: true
})
</script>

<template>
  <a-textarea v-bind="props">
    <slot />
  </a-textarea>
</template>
