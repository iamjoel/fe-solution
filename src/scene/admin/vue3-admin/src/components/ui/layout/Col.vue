<script ts setup>
const props = defineProps();
</script>

<template>
  <a-col v-bind="props">
    <slot />
  </a-col>
</template>