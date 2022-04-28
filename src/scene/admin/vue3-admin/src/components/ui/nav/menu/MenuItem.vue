<script ts setup>
const props = defineProps();
</script>

<template>
  <a-menu-item v-bind="props">
    <slot />
  </a-menu-item>
</template>