import React from 'react'
import Card from './components/Card'
import './Peer.css'


export default function Peer(props) {
  let peerHand = props.hand.map((card) => {
    return <Card size='mini' value={card.value} suit={card.suit} />
  })
  return (
    <div className={'Peer'}>
      <div className={'Peer-name'}>{props.name}</div>
      <div className={'Peer-hand'}>
        {peerHand}
      </div>
    </div>
  )
}
