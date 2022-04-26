<script ts setup>
const props = defineProps();
const applyProps = {
  type:"primary",
  ...props,
}
</script>

<template>
  <a-button v-bind="applyProps">
    <slot />
  </a-button>
</template>