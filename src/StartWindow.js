import React, { Component } from 'react'
import './StartWindow.css'

export default function StartWindow(props) {

  return (
    <div className={'StartWindow-container'}>
      <button onClick={() => props.toggleInPlay(true)}>New Game</button>
    </div>
  )
}

