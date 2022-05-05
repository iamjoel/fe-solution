<script setup lang="ts">
import Drawer from '@/components/ui/feedback/Drawer.vue'
const props = defineProps<{
  title: string,
  isShow: boolean,
  readonly: boolean,
  [key: string]: any,
}>()

</script>

<template>
  <Drawer
    :visible="props.isShow"
    :footer="!props.readonly"
    width="50vw"
    @ok="$emit('ok')"
    @cancel="$emit('cancel')"
    unmountOnClose
  >
    <template #title>{{props.title}}</template>
    <template #footer><slot name="footer"/></template>
    <slot />
  </Drawer>
</template>
