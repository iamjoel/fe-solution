<script setup lang="ts">
import { ref } from 'vue'

import Drawer from '@/components/ui/feedback/Drawer.vue'
const props = defineProps<{
  title: string,
  isShow: boolean,
  readonly: boolean,
  [key: string]: any,
}>()

const isFullScreen = ref(false)

</script>

<template>
  <Drawer
    :visible="props.isShow"
    :footer="!props.readonly"
    :width="isFullScreen ? '100vw' : '60vw'"
    @ok="$emit('ok')"
    @cancel="$emit('cancel')"
    unmountOnClose
  >
    <template #title>
      {{props.title}}
      <span @click="isFullScreen = !isFullScreen" class="toggle-fullscreen">{{isFullScreen ? '取消全屏' : '全屏'}}</span>
    </template>
    <template #footer><slot name="footer"/></template>
    <slot />
  </Drawer>
</template>

<style scoped>
.toggle-fullscreen {
  margin-left: 10px;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
}
</style>
