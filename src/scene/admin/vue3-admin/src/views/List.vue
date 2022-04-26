<script setup lang="ts">
import useList from '@/hooks/use-list';
import Input from '@/components/ui/form/Input.vue';
const {
  components: {
    SearchPanel,
    SearchItem,
    Table
  },
  list,
  fetchList,
  searchQuery,
} = useList()

const columns = [
      {
        title: 'No',
        dataIndex: 'no',
      }
]


</script>

<template>
  <main>
    <SearchPanel>
      <SearchItem name="no">
        <Input placeholder="input no" />
      </SearchItem>
    </SearchPanel>
    <Table :columns="columns" :data="list" />
  </main>
</template>
