<script ts setup>
const props = defineProps<Record<string, any>>()
</script>

<template>
  <a-table v-bind="props" />
</template>
