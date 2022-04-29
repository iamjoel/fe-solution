<script setup lang="ts">
import { fetchList } from '@/service/staff'
import List from '@/components/logic/List.vue'
import SearchItem from '@/components/logic/search/SearchItem.vue'
import Input from '@/components/ui/form/Input.vue'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '简介',
    dataIndex: 'describe'
  },
  {
    title: '地址',
    dataIndex: 'address'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  }
]
</script>

<template>
  <main>
    <List
      :fetchList="fetchList"
      :columns="columns"
    >
      <template #searchPanel>
        <SearchItem name="姓名">
          <Input />
        </SearchItem>
      </template>
    </List>
  </main>
</template>
