/* eslint-disable no-lone-blocks */
import { FC, useState } from 'react'
// import Card from './Card'
import Sortable from './Sortable'
import update from 'immutability-helper'

const style = {
  width: 400,
}

const itemStyle = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

const placeholderStyle = {
  borderColor: 'blue',
  background: 'rgba(0, 102, 255)',
  color: 'rgba(0, 102, 255)'
}

export interface Item {
  id: number
  text: string
}
export interface ContainerState {
  cards: Item[]
}

const Comp = Sortable('list')

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ])

    const moveCard = (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    }

    // const Comp = Sortable

    const renderItem = (isDragging: boolean, item: Item) => {
      // return item.text
      const otherStyle = isDragging ? placeholderStyle : {}
      return (
        <div style={{
          ...itemStyle,
          ...otherStyle
        }}>
          {item.text}
        </div>
      )
    }

    return (
      <div style={style}>
        <h2>Card</h2>
        {/* {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))} */}
        <h2>Sortable</h2>
        {cards.map((card, i) => (
          <Comp
              key={card.id}
              index={i}
              id={card.id}
              onSort={moveCard}
              renderItem={(isDragging: boolean) => renderItem(isDragging, card)}
          />
        ))}
      </div>
    )
  }
}
