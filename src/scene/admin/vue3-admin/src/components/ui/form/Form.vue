<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{
  setRef:(ref: any) => void,
  [key: string]: any,
}>()
const vmRef = ref(null)
onMounted(() => {
  props.setRef(vmRef.value)
})
</script>

<template>
  <a-form v-bind="props" ref="vmRef">
    <slot />
  </a-form>
</template>
