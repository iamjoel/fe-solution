<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-option v-bind="props">
    <slot />
  </a-option>
</template>
