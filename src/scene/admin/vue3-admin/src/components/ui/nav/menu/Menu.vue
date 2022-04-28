<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-menu v-bind="props">
    <slot />
  </a-menu>
</template>
