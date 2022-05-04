import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchPanel from '@/components/logic/search/SearchPanel.vue'
import Table from '@/components/ui/Table.vue'

interface State {
  searchQuery: Record<string, any>,
  list: Record<string, any>[]
  pageConfig: {
    current: number,
    total: number,
    showTotal: boolean,
    showJumper: boolean,
  }
}

export default function useList (doFetchList: (current: number) => Promise<any>) {
  const data = reactive<State>({
    searchQuery: {},
    list: [],
    pageConfig: {
      current: 1,
      total: 1,
      showTotal: true,
      showJumper: true
    }
  })

  const fetchList = async (current = 1) => {
    data.pageConfig.current = current
    const { data: { list, total } } = await doFetchList(current)
    data.list = list
    data.pageConfig.total = total
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
