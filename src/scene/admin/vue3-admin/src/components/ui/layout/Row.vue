<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-row v-bind="props">
    <slot />
  </a-row>
</template>
