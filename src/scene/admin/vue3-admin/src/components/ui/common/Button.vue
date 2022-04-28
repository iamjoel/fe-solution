<script ts setup>
const props = withDefaults(defineProps<Record<string, any>>(), {
  type: 'primary'
})
// const applyProps = {
//   type: 'primary',
//   ...props
// }
</script>

<template>
  <a-button v-bind="props">
    <slot />
  </a-button>
</template>
