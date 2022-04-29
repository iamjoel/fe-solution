import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchPanel from '@/components/logic/search/SearchPanel.vue'
import Table from '@/components/ui/Table.vue'

interface State {
  searchQuery: Record<string, any>,
  list: Record<string, any>[]
  pagination: {
    current: number,
    total: number,
  }
}

export default function useList (doFetchList: (current: number) => Promise<any>) {
  const data = reactive<State>({
    searchQuery: {},
    list: [],
    pagination: {
      current: 1,
      total: 1
    }
  })

  const fetchList = async (current = 1) => {
    data.pagination.current = current
    const { data: { list, total } } = await doFetchList(current)
    data.list = list
    data.pagination.total = total
  }

  onMounted(() => {
    fetchList()
  })

  watch(() => data.searchQuery, () => fetchList, { deep: true })
  return {
    ...toRefs(data),
    // ...data,
    fetchList,
    components: {
      SearchPanel,
      Table
    }
  }
}
