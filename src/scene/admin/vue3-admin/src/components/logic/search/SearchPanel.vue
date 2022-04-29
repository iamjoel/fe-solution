<script setup lang="ts">
import Row from '@/components/ui/layout/Row.vue'
import Button from '@/components/ui/common/Button.vue'

// const emit = defineEmits<{
//   (e: 'search'): void
// }>() // ts写法会编译报错。。。
const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search')
}
</script>

<template>
  <main class="search-panel">
    <Row>
      <slot />
    </Row>
    <Row justify="end">
      <Button @click="handleSearch">搜索</Button>
    </Row>
  </main>
</template>

<style scoped>
.search-panel {
  margin-bottom: 20px;
}
</style>
