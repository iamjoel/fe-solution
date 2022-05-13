<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-drawer v-bind="props">
    <template #title><slot name="title" /></template>
    <template #footer><slot name="footer" /></template>
    <slot />
  </a-drawer>
</template>
