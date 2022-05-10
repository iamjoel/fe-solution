<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-radio v-bind="props">
    <slot />
  </a-radio>
</template>
