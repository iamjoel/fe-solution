<script setup lang="ts">
import useList from '@/hooks/use-list'
import { fetchList as fetchStaffList } from '@/service/staff'
import Input from '@/components/ui/form/Input.vue'
const {
  components: { SearchPanel, SearchItem, Table },
  list,
  fetchList
  // searchQuery,
} = useList(fetchStaffList)

const columns = [
  {
    title: '姓名',
    dataIndex: 'name'
  }
]
</script>

<template>
  <main>
    <SearchPanel @search="fetchList(true)">
      <SearchItem name="姓名">
        <Input />
      </SearchItem>
    </SearchPanel>
    <Table :columns="columns" :data="list" />
  </main>
</template>
