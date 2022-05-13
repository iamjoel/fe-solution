import { onMounted, reactive, watch, toRefs } from 'vue'
import SearchPanel from '@/components/logic/search/SearchPanel.vue'
import Table from '@/components/ui/Table.vue'
import type { sortType } from '@/define/list.d'
interface State {
  list: Record<string, any>[]
  pageConfig: {
    current: number,
    total: number,
    showTotal: boolean,
    showJumper: boolean,
  }
  isLoading: boolean
}

export default function useList (doFetchList: (current: number, searchQuery: Record<string, any>) => Promise<any>, searchQuery: Record<string, any>) {
  const data = reactive<State>({
    list: [],
    pageConfig: {
      current: 1,
      total: 1,
      showTotal: true,
      showJumper: true
    },
    isLoading: false
  })

  const fetchList = async (current = 1, sortParams?: {key: string, value: sortType}) => {
    data.isLoading = true
    data.pageConfig.current = current
    const { data: { list, total } } = await doFetchList(current, searchQuery, sortParams)
    data.list = list
    data.pageConfig.total = total
    data.isLoading = false
  }

  const sortList = (sortParams: {key: string, value: sortType}) => {
    fetchList(1, sortParams)
  }

  onMounted(() => {
    fetchList()
  })

  watch(() => searchQuery, () => fetchList, { deep: true })
  return {
    ...toRefs(data),
    fetchList,
    sortList,
    components: {
      SearchPanel,
      Table
    }
  }
}
