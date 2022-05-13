<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-row v-bind="props">
    <slot />
  </a-row>
</template>
