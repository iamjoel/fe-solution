<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-input v-bind="props" />
</template>
