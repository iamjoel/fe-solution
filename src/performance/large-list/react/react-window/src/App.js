import {useState, useCallback, useRef} from 'react'
import { FixedSizeList, VariableSizeList } from 'react-window'

import './App.css'

const ITEM_HEIGHT = 30 // 子项的高度
const LIST_MAX_HEIGHT = 280

function App() {
  // 子项定高
  const list = new Array(1000)
    .fill(0)
    .map(i => i + 1)

  const getListHeight = (len) => Math.min(LIST_MAX_HEIGHT, ITEM_HEIGHT * len);

  const renderItem = ({index, style, data: {list}}) => {
    return (
      <div style={style} key={index} className="item">
        第 {list[index]} 项
      </div>
    )
  }

  const getVarListHeight = () => {
    const res = new Array(1000)
      .fill(0)
      .map(i => 25 + Math.round(Math.random() * 50))
    return res
  }

  // 子项不定高
  const [varList, setVarList] = useState(getVarListHeight())
  const resetVarList = useCallback(() => {
    setVarList(getVarListHeight())
    varListRef.current.resetAfterIndex(0, false)
  }, [])

  const varListRef = useRef(null)

  const getItemHeight = index => varList[index];
  
  const renderVarItem = ({index, style, data: {list}}) => {
    return (
      <div style={style} key={index} className="item">
        第 {index + 1} 项: 高 {list[index]} px
      </div>
    )
  }
  
  return (
    <div className="App">
      <div className="list">
        <h2>子项定高</h2>
        <FixedSizeList
            itemCount={list.length}
            itemSize={ITEM_HEIGHT}
            height={getListHeight(list.length)}
            itemData={{
                list
            }}
        >
            {renderItem}
        </FixedSizeList>
      </div>

      <div className="list">
        <h2>子项不定高</h2>
        <button onClick={resetVarList}>变子项高度</button>
        <VariableSizeList
            itemCount={varList.length}
            itemSize={getItemHeight}
            height={LIST_MAX_HEIGHT}
            itemData={{
              list: varList
            }}
            ref={varListRef}
        >
            {renderVarItem}
        </VariableSizeList>
      </div>
    </div>
  );
}


export default App;
