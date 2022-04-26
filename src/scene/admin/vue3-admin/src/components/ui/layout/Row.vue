<script ts setup>
const props = defineProps();
</script>

<template>
  <a-row v-bind="props">
    <slot />
  </a-row>
</template>