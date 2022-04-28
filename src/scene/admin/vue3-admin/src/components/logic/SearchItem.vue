<script ts setup>
import Row from '@/components/ui/layout/Row.vue'
import Col from '@/components/ui/layout/Col.vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Col :span="6">
    <Row align="center" :gutter="10">
      <Col :span="6" class="label">
        {{ props.name }}
      </Col>
      <Col :span="18">
        <slot />
      </Col>
    </Row>
  </Col>
</template>

<style scoped>
.label {
  text-align: right;
}
</style>
