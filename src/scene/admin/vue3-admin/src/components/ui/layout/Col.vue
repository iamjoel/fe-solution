<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-col v-bind="props">
    <slot />
  </a-col>
</template>
