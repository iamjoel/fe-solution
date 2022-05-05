<script setup lang="ts">
import { nextTick, ref, reactive, computed } from 'vue'
import useList from '@/hooks/use-list'
import Button from '@/components/ui/common/Button.vue'
import Space from '@/components/ui/layout/Space.vue'
import Detail from '@/components/logic/detail/DetailDrawer.vue'
const props = defineProps<{
  fetchList:(current: number, searchQuery: Record<string, any>) => Promise<any>,
  searchQuery: Record<string, any>,
  columns: any[],
  getDetailTitle?: (rowData: Record<string, any>) => string,
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
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 50
  },
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

const handleDelete = (id: number) => {
  console.log(id)
}

// 详情
const isShowDetail = ref(false)
const currItem = reactive({})
const type = ref<'view'|'edit'>('view')
const handleView = (rowData: Record<string, any>) => {
  isShowDetail.value = true
  Object.assign(currItem, rowData)
}
const detailTitle = computed(() => {
  if (props.getDetailTitle) {
    return props.getDetailTitle(currItem)
  }
  return currItem.title || currItem.name || '详情'
})

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
          <Button @click="handleView(rowData)" size="xs">详情</Button>
          <Button @click="handleDelete(rowData.id)" size="xs" status="danger">删除</Button>
        </Space>
      </template>
    </Table>

    <Detail
      :isShow="isShowDetail"
      :title="detailTitle"
      :readonly="type === 'view'"
      @cancel="isShowDetail = false"
    >
      <slot name="detail" :type="type"/>
    </Detail>
  </main>
</template>
