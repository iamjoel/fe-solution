import { useState } from 'react'
import useCombine from '../hooks/use-combine'
// 面积变化的时候，提示信息。这里
const UseCombineDemo = () => {
  const [width, setWidth] = useState(4)
  const [height, setHeight] = useState(3)
  const [length, setLength] = useState(5)
  useCombine([width, height], () => {
    console.log(width * height )
  })

  return <div>
    <input value={width} onChange={e => setWidth(e.target.value)}></input>
    <input value={height} onChange={e => setHeight(e.target.value)}></input>
    <input value={length} onChange={e => setLength(e.target.value)}></input>
  </div>
}

export default UseCombineDemo