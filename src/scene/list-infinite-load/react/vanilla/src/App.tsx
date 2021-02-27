import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(getInitList())
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef(null)
  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
        const newList = (new Array(5)).fill(0).map((item, i) => `item${Math.round(Math.random() * 1000)}`)
        setList([...list, ...newList])
        setIsLoading(false)
    }, 500)
    
  }

  const handleScroll = (e: any) => {
    const listDOM: (HTMLDivElement | null) = listRef && listRef.current
    if (listDOM) {
      const totalHeight = (listDOM as HTMLDivElement).scrollHeight
      const scrollTop = (listDOM as HTMLDivElement).scrollTop
      const clientHeight = (listDOM as HTMLDivElement).clientHeight
      // 滚动到底部了
      if (totalHeight - clientHeight === scrollTop) {
        loadMore()
      }
    }
  }
  return (
    <div className="list" onScroll={handleScroll} ref={listRef}>
      {list.map((item, i) => {
        return <div key={i} className="item">{item}</div>
      })}
      {isLoading && <div>加载中...</div>}
    </div>
  );
}

function getInitList () {
    return (new Array(10)).fill(0).map((item, i) => `item${i + 1}`)
}


export default App;
