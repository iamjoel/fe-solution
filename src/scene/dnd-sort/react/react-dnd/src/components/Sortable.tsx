import { forwardRef, useImperativeHandle, useRef } from 'react'
import {
  ConnectDropTarget,
  ConnectDragSource,
  DropTargetMonitor,
  DragSourceMonitor,
} from 'react-dnd'
import {
  DragSource,
  DropTarget,
  DropTargetConnector,
  DragSourceConnector,
} from 'react-dnd'
import { XYCoord } from 'dnd-core'
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}


export interface SortableProps {
  id: any
  index: number
  onSort: (dragIndex: number, hoverIndex: number) => void
  renderItem: (isDragging: boolean) => JSX.Element

  isDragging: boolean
  connectDragSource: ConnectDragSource
  connectDropTarget: ConnectDropTarget
}

interface SortableInstance {
  getNode(): HTMLDivElement | null
}

const Sortable = forwardRef<HTMLDivElement, SortableProps>(
  ({ isDragging, connectDragSource, connectDropTarget, renderItem }, ref) => {
    const elementRef = useRef(null)
    connectDragSource(elementRef)
    connectDropTarget(elementRef)

    useImperativeHandle<any, SortableInstance>(ref, () => ({
      getNode: () => elementRef.current,
    }))
    return (
      <div ref={elementRef}>
        {renderItem(isDragging)}
      </div>
    )
  },
)

// https://github.com/influitive/react-dnd-sortable/blob/master/src/sortable-item.jsx
const Wrap = (type: string) => {
  const Comp = DropTarget(
    type,
    {
      hover(
        props: SortableProps,
        monitor: DropTargetMonitor,
        component: SortableInstance,
      ) {
        if (!component) {
          return null
        }
        const node = component.getNode() // hover node
        if (!node) {
          return null
        }
  
        const dragIndex = monitor.getItem().index
        // console.log(monitor.getItem()) // beginDrag 返回的对象
        const hoverIndex = props.index
        console.log(`拖的那个: ${dragIndex}, 碰到的那个 ${hoverIndex}`)
  
        if (dragIndex === hoverIndex) {
          return
        }
  
        const hoverBoundingRect = node.getBoundingClientRect()
  
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  
        const clientOffset = monitor.getClientOffset()
  
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
  
        // 往下移
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        // 往上移
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
  
        // 卡片互换
        props.onSort(dragIndex, hoverIndex)
  
        monitor.getItem().index = hoverIndex
      },
    },
    // collect
    (connect: DropTargetConnector) => ({
      connectDropTarget: connect.dropTarget(),
    }),
  )(
    DragSource(
      type,
      {
        beginDrag: (props: SortableProps) => ({
          id: props.id,
          index: props.index,
        }),
        endDrag: (props: SortableProps, monitor: DragSourceMonitor) => {
          if (!monitor.didDrop()) {
            return
          }
        }
      },
      (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
      }),
    )(Sortable),
  )
  return Comp
}

export default Wrap
