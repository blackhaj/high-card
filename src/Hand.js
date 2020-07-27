import React from 'react'
import './Hand.css'
import Card from './components/Card'

export default function Hand(props) {
  let cards;
  let total = 0;
  let average = ""
  // if players instantiated
  if (props.player) {
    // Create the card components
    cards = props.player.hand.map((card) => {
      return <Card value={card.value} suit={card.suit} size={'large'} />
    })

    // Tot up total score
    total = props.player.hand.reduce((acc, el) => {
      if (typeof el.value === 'string'){
        switch (el.value) {
          case 'J':
            acc += 11
            break;
          
          case 'Q':
            acc += 12
            break;
  
          case 'K':
            acc += 13
            break;
          
          case 'A':
            acc += 14
            break;
  
          default:
            break;
        }
      } else {
        acc += el.value
      }
      return acc
    }, total)
    
    if (props.player.hand.length > 1) {
      average = `, Average Card: ${(total / props.player.hand.length).toFixed(2)}`
    }
  }
  
  
  return (
    <div className={'Hand'}>
      <h1>Hand</h1>
      <div>Total: {total.toString()}{average} </div>
      <div className={"Hand-rack"}>
        {cards}
      </div>
    </div>
  )
}
