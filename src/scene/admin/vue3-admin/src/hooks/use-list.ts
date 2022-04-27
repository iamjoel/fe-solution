import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchPanel from '@/components/logic/SearchPanel.vue'
import SearchItem from '@/components/logic/SearchItem.vue'
import Table from '@/components/ui/Table.vue'


export default function useList() {
  const data = reactive({
    searchQuery: {},
    list: [],
    pager: {
      current: 1,
      total: 1
    }
  })

  const fetchList = (reSearch?: boolean) => {
    if (reSearch) {
      data.pager.current = 1
    }
    data.list = []
    for(let i = 0; i < 10; i++) {
      data.list.push({
        id: i,
        key: i,
        no: Math.round(Math.random() * 1000)
      })
    }
  }

  onMounted(() => {
    console.log('mounted')
    fetchList()
  })

  watch(() => data.searchQuery, fetchList, { deep: true })
  return {
    ...toRefs(data),
    fetchList,
    components: {
      SearchPanel,
      SearchItem,
      Table,
    }
  }
}