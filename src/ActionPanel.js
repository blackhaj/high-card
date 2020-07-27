import React from 'react'
import './ActionPanel.css'

export default function ActionPanel(props) {
  return (
    <div className={"ActionPanel"}>
      <h1>Action Panel</h1>
      <h3>Round: {props.round}</h3>
      <button onClick={() => props.performRound()}>Next Round</button>
    </div>
  )
}
