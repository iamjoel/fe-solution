<script ts setup>
const props = defineProps<Record<string, any>>()
const applyProps = {
  type: 'primary',
  ...props
}
</script>

<template>
  <a-button v-bind="applyProps">
    <slot />
  </a-button>
</template>
