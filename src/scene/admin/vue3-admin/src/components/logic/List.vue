<script setup lang="ts">
import useList from '@/hooks/use-list'
import Button from '@/components/ui/common/Button.vue'
import Space from '@/components/ui/layout/Space.vue'
const props = defineProps<{
  fetchList:(current: number) => Promise<any>,
  columns: any[],
}>()

const {
  components: { SearchPanel, Table },
  list,
  fetchList,
  pageConfig
  // searchQuery,
} = useList(props.fetchList)

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

const handlePageChange = (current: number) => {
  fetchList(current)
}

const handleView = (id) => {
  console.log(id)
}

const handleDelete = (id) => {
  console.log(id)
}
</script>

<template>
  <main>
    <SearchPanel @search="fetchList(1)">
      <slot name="searchPanel"/>
    </SearchPanel>
    <Table
      :columns="columns"
      :data="list"
      :pagination="pageConfig"
      :scroll="scrollConfig"
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
