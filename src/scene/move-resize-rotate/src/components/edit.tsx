import React, {useState, useEffect, useRef} from 'react'
import Moveable from "react-moveable"

const Edit:React.FC<any> = ({
    size,
    setSize,
    loc,
    setLoc,
    rotate,
    setRotate
}) => {
  const [target, setTarget] = useState(null);
  useEffect(() => {
      setTarget(document.getElementById(`target`) as any)
      moveableRef.current?.updateRect()
  }, [])

  const moveableRef = useRef<any>(null)

  const left = loc.left || 0
  const top = loc.top || 0
  const translate = [left, top]

  useEffect(() => {
    // 同步到编辑的元素
    moveableRef.current?.updateRect()
  }, [size, loc, rotate])


  return (
    <>
      {/* 注意：target 必须和 Moveable 的元素是兄弟关系，否则会出现位置差一点的问题。 */}
      <Moveable
          ref={moveableRef}
          target={target as any}
          throttleResize={1}
          renderDirections={["nw","n","ne","w","e","sw","s","se"]}
          edge={false}
          zoom={1}
          origin={false}
          padding={{"left":0,"top":0,"right":0,"bottom":0}}
          keepRatio={true}
          // 加了 snappable。bounds才会生效
          snappable={true}
          // 不能拖出的区域
          bounds={{"left":0,"top":0,"right": 500,"bottom": 500}}
          // snapContainer={document.getElementById(containerId)}
          resizable
          onResizeStart={e => {
              e.setOrigin(["%", "%"]);
              e.dragStart && e.dragStart.set(translate);
          }}
          onResize={e => {
              const beforeTranslate = e.drag.beforeTranslate;
              e.target.style.width = `${e.width}px`;
              e.target.style.height = `${e.height}px`;
            //   debugger
              setLoc({
                left: beforeTranslate[0],
                top: beforeTranslate[1],
              })
              setSize({
                width: e.width,
                height: e.height
              })
              e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
          rotatable={true}
          throttleRotate={0}
          rotationPosition={"top"}
          // originDraggable
          draggable
          onDragOriginStart={e => {
              e.dragStart && e.dragStart.set(translate);
          }}
          onDragStart={e => {
              e.set(translate);
          }}
          onDrag={e => {
            setLoc({
                left: e.beforeTranslate[0],
                top: e.beforeTranslate[1],
              })
          }}
          onRotateStart={e => {
              e.set(rotate);
          }}
          onRotate={e => {
            setRotate(e.beforeRotate)
          }}
          onRender={e => {
            e.target.style.transform = `translate(${left}px, ${top}px)`
                +  ` rotate(${rotate}deg)`;
        }}
      />
    </>
  )
}

export default React.memo(Edit)
