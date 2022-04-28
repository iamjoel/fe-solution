<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-sub-menu v-bind="props">
    <template #icon><slot name="icon" /></template>
    <template #title><slot name="title" /></template>
    <slot />
  </a-sub-menu>
</template>
