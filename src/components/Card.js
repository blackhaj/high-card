import React from 'react'
import './Card.css'

export default function Card(props) {
  let sizes;
  if (props.size === 'large') {
    sizes = {
      width: 150,
      height: 225,
    }
  } else if (props.size === 'mini') {
    sizes = {
      width: 60,
      height: 100,
    }
  }
  return (
    <div className={'Card'} style={sizes}>
      <div className={'Card-value right'}>{props.value}</div>
      <div className={'Card-suit'}>{props.suit}</div>
      <div className={'Card-value left'}>{props.value}</div>
    </div>
  )
}
