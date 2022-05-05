<script setup lang="ts">
import { nextTick } from 'vue'
import useList from '@/hooks/use-list'
import Button from '@/components/ui/common/Button.vue'
import Space from '@/components/ui/layout/Space.vue'
const props = defineProps<{
  fetchList:(current: number, searchQuery: Record<string, any>) => Promise<any>,
  searchQuery: Record<string, any>,
  columns: any[],
}>()

const emit = defineEmits(['reset'])

const {
  components: { SearchPanel, Table },
  list,
  fetchList,
  pageConfig
} = useList(props.fetchList, props.searchQuery)

const scrollConfig = { x: '100%' }

const columns = [
  ...props.columns,
  {
    title: '操作',
    width: 150,
    fixed: 'right',
    slotName: 'operation'
  }
]

const handleReset = async () => {
  emit('reset')
  await nextTick()
  fetchList(1)
}

const handlePageChange = (current: number) => {
  fetchList(current)
}

const handleView = (id: number) => {
  console.log(id)
}

const handleDelete = (id: number) => {
  console.log(id)
}
</script>

<template>
  <main>
    <SearchPanel
      @search="fetchList(1)"
      @reset="handleReset"
    >
      <slot name="searchPanel"/>
    </SearchPanel>
    <Table
      :columns="columns"
      :data="list"
      :scroll="scrollConfig"
      :pagination="pageConfig"
      @page-change="handlePageChange"
    >
      <template #operation="{ rowData }">
        <Space>
          <Button @click="handleView(rowData.id)" size="xs">详情</Button>
          <Button @click="handleDelete(rowData.id)" size="xs" status="danger">删除</Button>
        </Space>
      </template>
    </Table>
  </main>
</template>
