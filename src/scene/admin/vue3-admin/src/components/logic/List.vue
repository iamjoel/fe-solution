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
  pagination
  // searchQuery,
} = useList(props.fetchList)

const handlePageChange = (current: number) => {
  fetchList(current)
}

</script>

<template>
  <main>
    <SearchPanel @search="fetchList(true)">
      <slot name="searchPanel"/>
    </SearchPanel>
    <Table
      :columns="props.columns"
      :data="list"
      :pagination="pagination"
      @page-change="handlePageChange"
    />
  </main>
</template>
