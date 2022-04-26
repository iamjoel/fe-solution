<script ts setup>
import Row from '@/components/ui/layout/Row.vue';
import Button from '@/components/ui/common/Button.vue';
</script>

<template>
  <main class="search-panel">
    <Row>
      <slot />
    </Row>
    <Row justify="end">
      <Button>搜索</Button>
    </Row>
  </main>
</template>

<style scoped>
.search-panel {
  margin-bottom: 20px;
}
</style>