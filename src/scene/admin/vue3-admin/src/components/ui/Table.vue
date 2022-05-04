<script setup lang="ts">
const props = defineProps<{
  [key: string]: any,
}>()
</script>

<template>
  <a-table v-bind="props">
    <template #operation="{ record }"><slot name="operation" :rowData="record"/></template>
  </a-table>
</template>
