<script setup lang="ts">
import Row from '@/components/ui/layout/Row.vue'
import Button from '@/components/ui/common/Button.vue'

const emit = defineEmits(['search', 'reset'])

const handleReset = () => {
  emit('reset')
}

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
      <Button @click="handleReset" type="secondary" class="reset-btn">重置</Button>
      <Button @click="handleSearch">搜索</Button>
    </Row>
  </main>
</template>

<style scoped>
.search-panel {
  margin-bottom: 20px;
}

.reset-btn {
  margin-right: 10px;
}
</style>
