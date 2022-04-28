<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-menu-item v-bind="props">
    <slot />
  </a-menu-item>
</template>
