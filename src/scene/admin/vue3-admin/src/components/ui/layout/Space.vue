<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-space v-bind="props">
    <slot />
  </a-space>
</template>
