<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-col v-bind="props">
    <slot />
  </a-col>
</template>
