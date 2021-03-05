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
import { ItemTypes } from './ItemTypes'
import { XYCoord } from 'dnd-core'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export interface CardProps {
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void

  isDragging: boolean
  connectDragSource: ConnectDragSource
  connectDropTarget: ConnectDropTarget
}

interface CardInstance {
  getNode(): HTMLDivElement | null
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ text, isDragging, connectDragSource, connectDropTarget }, ref) => {
    const elementRef = useRef(null)
    connectDragSource(elementRef)
    connectDropTarget(elementRef)

    const placeholderStyle = isDragging ? {
      borderColor: 'blue',
      background: 'rgba(0, 102, 255)',
      color: 'rgba(0, 102, 255)'
    } : {}
    useImperativeHandle<any, CardInstance>(ref, () => ({
      getNode: () => elementRef.current,
    }))
    return (
      <div ref={elementRef} style={{ ...style, ...placeholderStyle }}>
        {text}
      </div>
    )
  },
)

export default DropTarget(
  ItemTypes.CARD,
  {
    hover(
      props: CardProps,
      monitor: DropTargetMonitor,
      component: CardInstance,
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
      props.moveCard(dragIndex, hoverIndex)

      monitor.getItem().index = hoverIndex
    },
  },
  // collect
  (connect: DropTargetConnector) => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    ItemTypes.CARD,
    {
      beginDrag: (props: CardProps) => ({
        id: props.id,
        index: props.index,
      }),
      endDrag: (props: CardProps, monitor: DragSourceMonitor) => {
        if (!monitor.didDrop()) {
          return
        }
        console.log('end drag')
      }
    },
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
