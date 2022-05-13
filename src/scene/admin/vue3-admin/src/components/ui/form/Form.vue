<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  [key: string]: any,
}>()
const vmRef = ref(null)

defineExpose({
  form: vmRef
})
</script>

<template>
  <a-form v-bind="props" ref="vmRef">
    <slot />
  </a-form>
</template>
