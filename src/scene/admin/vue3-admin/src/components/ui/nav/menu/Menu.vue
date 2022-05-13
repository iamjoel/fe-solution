<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-menu v-bind="props">
    <slot />
  </a-menu>
</template>
