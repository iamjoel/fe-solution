<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-form v-bind="props">
    <slot />
  </a-form>
</template>
