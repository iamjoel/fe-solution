<script setup lang="ts">
import { h, nextTick, ref, reactive, computed } from 'vue'
import { success } from '@/components/ui/feedback/message'
import Divider from '@/components/ui/layout/Divider.vue'
import Button from '@/components/ui/common/Button.vue'
import Space from '@/components/ui/layout/Space.vue'
import PopupConfirm from '@/components/ui/feedback/PopupConfirm.vue'

import Detail from '@/components/logic/detail/DetailDrawer.vue'
import { sortType } from '@/define/list.d'
import useList from '@/hooks/use-list'

const props = defineProps<{
  fetchList:(current: number, searchQuery: Record<string, any>, sortParams: {key: string, value: sortType}) => Promise<any>,
  searchQuery: Record<string, any>,
  columns: any[],
  getDetailTitle?: (rowData: Record<string, any>) => string,
}>()

const emit = defineEmits(['reset', 'save', 'remove'])

const {
  components: { SearchPanel, Table },
  list,
  fetchList,
  sortList,
  pageConfig,
  isLoading
} = useList(props.fetchList, props.searchQuery)

const scrollConfig = { x: '100%' }

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 50,
    render ({ record }: any) {
      return h('span', {
        class: 'col-id',
        onClick: () => {
          handleOnView(record)
        }
      }, record.id)
    }
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

const handleSort = (key, value) => {
  sortList({ key, value })
}

const handleDelete = (id: number) => {
  emit('remove', {
    id,
    onSuccess: () => {
      success('删除成功!')
      fetchList()
    }
  })
}

// 详情
const isShowDetail = ref(false)
const currItem = reactive({})
const type = ref<'view' | 'edit' | 'create'>('view')

const detailTitle = computed(() => {
  if (props.getDetailTitle) {
    return props.getDetailTitle(currItem)
  }
  return currItem.title || currItem.name || '详情'
})

const handleOnView = (rowData: Record<string, any>) => {
  type.value = 'view'
  isShowDetail.value = true
  Object.assign(currItem, rowData)
}

const handleOnEdit = (rowData: Record<string, any>) => {
  type.value = 'edit'
  isShowDetail.value = true
  Object.assign(currItem, rowData)
}

const handleCreate = () => {
  type.value = 'create'
  isShowDetail.value = true
  Object.keys(currItem).forEach(key => {
    currItem[key] = null
  })
}

const handleSave = () => {
  emit('save', {
    type: type.value,
    payload: currItem,
    onSuccess: () => {
      success('操作成功!')
      isShowDetail.value = false
      fetchList(type.value === 'edit' ? pageConfig.value.current : 1)
    }
  })
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
    <Divider />
    <div class="operation-wrap">
      <Button @click="handleCreate">新增</Button>
    </div>
    <Table
      class="table"
      :columns="columns"
      :data="list"
      :scroll="scrollConfig"
      :pagination="pageConfig"
      @page-change="handlePageChange"
      :loading="isLoading"
      @sorterChange="handleSort"
    >
      <template #operation="{ rowData }">
        <Space>
          <Button @click="handleOnEdit(rowData)" size="xs">编辑</Button>
          <PopupConfirm @ok="handleDelete(rowData.id)" content="确认删除?">
            <Button size="xs" status="danger">删除</Button>
          </PopupConfirm>
        </Space>
      </template>
    </Table>

    <Detail
      :isShow="isShowDetail"
      :title="detailTitle"
      :readonly="type === 'view'"
      @ok="handleSave"
      @cancel="isShowDetail = false"
    >
      <slot name="detail" :type="type" :currItem="currItem"/>
    </Detail>
  </main>
</template>

<style scoped>
:deep(.table .col-id) {
  text-decoration: underline;
  cursor: pointer;
}

.operation-wrap {
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
