<script setup lang="ts">
import useList from '@/hooks/use-list'
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

const handlePageChange = (current: number) => {
  fetchList(current)
}

</script>

<template>
  <main>
    <SearchPanel @search="fetchList(1)">
      <slot name="searchPanel"/>
    </SearchPanel>
    <Table
      :columns="props.columns"
      :data="list"
      :pagination="pageConfig"
      @page-change="handlePageChange"
    />
  </main>
</template>
