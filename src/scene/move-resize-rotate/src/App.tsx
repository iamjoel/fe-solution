import React, {useState} from 'react';
import Edit from './components/edit'

function App() {
  const [size, setSize] = useState({
      width: 100,
      height: 80
  })

  const [loc, setLoc] = useState({
      left: 150,
      top: 200
  })

  const [rotate, setRotate] = useState(30)
  const targetSize = {
      background: 'yellow',
      ...size,
      transform: `translate(${loc.left}px, ${loc.top}px) rotate(${rotate}deg)`
  }
  return (
    <div style={{
        width: 500,
        height: 500,
        // margin: '20px auto',
        border: '1px solid #000'
    }}>
      {/* 注意： 被编辑元素 和 编辑元素必须要同一个父元素下  */}
      {/* 被编辑元素 */}
      <div 
        id="target"
        style={targetSize as any}
      ></div>
      {/* 编辑元素 */}
      <Edit
        size={size}
        setSize={setSize}
        loc={loc}
        setLoc={setLoc}
        rotate={rotate}
        setRotate={setRotate}
      />
    </div>
  );
}

export default App;
