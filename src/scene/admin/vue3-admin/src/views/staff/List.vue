<script setup lang="ts">
import { reactive, h } from 'vue'
import { fetchList, create, edit, remove } from '@/service/staff'
import List from '@/components/logic/List.vue'
import SearchItem from '@/components/logic/search/SearchItem.vue'
import Input from '@/components/ui/form/Input.vue'
import InputNumber from '@/components/ui/form/InputNumber.vue'
import Select from '@/components/ui/form/select/Select.vue'
import Option from '@/components/ui/form/select/Option.vue'
import RangePicker from '@/components/ui/form/RangePicker.vue'
import FormItem from '@/components/ui/form/FormItem.vue'
import RadioGroup from '@/components/ui/form/radio/RadioGroup.vue'
import Radio from '@/components/ui/form/radio/Radio.vue'
import Textarea from '@/components/ui/form/Textarea.vue'

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
    width: 100,
    sortable: {
      sortDirections: ['ascend', 'descend'],
      sorter: true // 关闭客户端排序
    }
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

const handleSave = async ({ type, payload, onSuccess }) => {
  if (type === 'edit') {
    await edit(payload.id, payload)
  } else {
    await create(payload)
  }
  onSuccess()
}

const handleRemove = async ({ id, onSuccess }) => {
  await remove(id)
  onSuccess()
}
</script>

<template>
  <main>
    <List
      :fetchList="fetchList"
      :columns="columns"
      :searchQuery="searchQuery"
      @reset="handleReset"
      @save="handleSave"
      @remove="handleRemove"
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
          <FormItem
            label="姓名"
            field="name"
            :rules="type !== 'view' ? [{required:true,message:'姓名必填'}] : []"
            :validate-trigger="['change','input']"
          >
            <Input v-model="currItem.name" :disabled="type === 'view'"/>
          </FormItem>
          <FormItem
            label="年龄"
            field="age"
            :rules="type !== 'view' ? [{required:true,message:'年龄'}] : []"
            :validate-trigger="['change','input']"
          >
            <InputNumber v-model="currItem.age" :disabled="type === 'view'"/>
          </FormItem>
          <FormItem
            label="性别"
            field="gender"
            :rules="type !== 'view' ? [{required:true,message:'性别必选'}] : []"
            :validate-trigger="['change']"
          >
            <div v-if="type === 'view'">{{currItem.gender === 1 ? '男' : '女'}}</div>
            <RadioGroup v-model="currItem.gender" v-else>
              <Radio :value="1">男</Radio>
              <Radio :value="0">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="简介">
            <Textarea v-model="currItem.describe" :disabled="type === 'view'"/>
          </FormItem>
      </template>
    </List>
  </main>
</template>
