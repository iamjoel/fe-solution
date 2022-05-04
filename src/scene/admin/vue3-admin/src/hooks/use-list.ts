import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchPanel from '@/components/logic/search/SearchPanel.vue'
import Table from '@/components/ui/Table.vue'

interface State {
  list: Record<string, any>[]
  pageConfig: {
    current: number,
    total: number,
    showTotal: boolean,
    showJumper: boolean,
  }
}

export default function useList (doFetchList: (current: number, searchQuery: Record<string, any>) => Promise<any>, searchQuery: Record<string, any>) {
  const data = reactive<State>({
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
    const { data: { list, total } } = await doFetchList(current, searchQuery)
    data.list = list
    data.pageConfig.total = total
  }

  onMounted(() => {
    fetchList()
  })

  watch(() => searchQuery, () => fetchList, { deep: true })
  return {
    ...toRefs(data),
    fetchList,
    components: {
      SearchPanel,
      Table
    }
  }
}
