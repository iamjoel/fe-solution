<script ts setup>
const props = defineProps();
</script>

<template>
  <a-menu v-bind="props">
    <slot />
  </a-menu>
</template>