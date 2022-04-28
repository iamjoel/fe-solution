<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-input v-bind="props" />
</template>
