<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-radio-group v-bind="props">
    <slot />
  </a-radio-group>
</template>
