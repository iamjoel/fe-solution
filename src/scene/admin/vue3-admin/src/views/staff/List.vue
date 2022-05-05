<script setup lang="ts">
import { reactive, h } from 'vue'
import { fetchList } from '@/service/staff'
import List from '@/components/logic/List.vue'
import SearchItem from '@/components/logic/search/SearchItem.vue'
import Input from '@/components/ui/form/Input.vue'
import Select from '@/components/ui/form/select/Select.vue'
import Option from '@/components/ui/form/select/Option.vue'
import RangePicker from '@/components/ui/form/RangePicker.vue'
import Form from '@/components/ui/form/Form.vue'
import FormItem from '@/components/ui/form/FormItem.vue'

const getDefaultSearchQuery = () => ({
  name: '',
  address: '',
  createTime: []
})

const searchQuery = reactive(getDefaultSearchQuery())

const handleReset = async () => {
  Object.assign(searchQuery, getDefaultSearchQuery())
}

const columns = [
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
    render ({ record }: any) {
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
      :searchQuery="searchQuery"
      @reset="handleReset"
    >
      <!-- 搜索条件 -->
      <template #searchPanel>
        <SearchItem name="姓名">
          <Input v-model="searchQuery.name"/>
        </SearchItem>
        <SearchItem name="省份">
          <Select v-model="searchQuery.address" placeholder="不限">
            <Option value="">不限</Option>
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="江苏">江苏省</Option>
            <Option value="浙江">浙江省</Option>
            <Option value="广东">广东省</Option>
            <Option value="山东">山东省</Option>
          </Select>
        </SearchItem>

        <SearchItem name="创建时间">
          <RangePicker v-model="searchQuery.createTime"/>
        </SearchItem>
      </template>

      <!-- 详情 -->
      <template #detail="{ type, currItem }">
        <Form :model="currItem">
          <FormItem label="姓名">
            <Input v-model="currItem.name" :disabled="type === 'view'"/>
          </FormItem>
        </Form>
      </template>
    </List>
  </main>
</template>
