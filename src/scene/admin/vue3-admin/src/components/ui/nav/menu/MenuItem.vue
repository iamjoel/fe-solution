<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-menu-item v-bind="props">
    <slot />
  </a-menu-item>
</template>
