<script setup lang="ts">
import { h } from 'vue'
import { fetchList } from '@/service/staff'
import List from '@/components/logic/List.vue'
import SearchItem from '@/components/logic/search/SearchItem.vue'
import Input from '@/components/ui/form/Input.vue'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 50
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 80
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 60
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 60,
    render ({ record }) {
      return h('span', record.gender === 1 ? '男' : '女')
    }
  },
  {
    title: '简介',
    dataIndex: 'describe',
    ellipsis: true
  },
  {
    title: '地址',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120
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
