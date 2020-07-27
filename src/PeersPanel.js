import React from 'react'
import Peer from './Peer'
import './PeersPanel.css'

export default function PeersPanel(props) {
  let peers = props.peers.map((peer) => {
    return <Peer name={peer.name} hand={peer.hand} />
  })
  return (
    <div className={'PeersPanel'}>
      {peers}
    </div>
  )
}
