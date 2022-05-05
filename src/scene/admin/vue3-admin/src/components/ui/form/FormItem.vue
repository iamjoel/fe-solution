<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-form-item v-bind="props">
    <slot />
  </a-form-item>
</template>
