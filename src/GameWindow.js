import React, { Component } from 'react'
import Market from './Market'
import Hand from './Hand'
import ActionPanel from './ActionPanel'
import PeersPanel from './PeersPanel'

import './GameWindow.css'


export default class GameWindow extends Component {

  state = {
    deck: [],
    round: 1,
    players: [],
    numOfPlayers: this.props.players,
  }

  componentDidMount(){
    const deck = this.createDeck();
    this.shuffle(deck, 1000);
    const players = this.instantiatePlayers(deck, this.props.players)
    this.setState({
      deck,
      players,
    })
  }

  createDeck = () => {
    let suits = ['spades', 'diamonds', 'clubs', 'hearts']
    let values = ["A",2,3,4,5,6,7,8,9,10, "J", "Q", "K"]
    let newDeck = [];
  
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({
          suit: suit,
          value: value
        })
      }
    }
    return newDeck
  }

  shuffle = (deck, times) => {
    // switch two cards in the deck 1000 times
    for (let i = 0; i < times; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      [deck[location1], deck[location2]] = [deck[location2], deck[location1]];
    }
  }

  instantiatePlayers = (deck, numOfPlayers) => {
    const players = [];
    for (let i = 0; i < numOfPlayers; i++) {
      const hand = this.drawCards(deck, 2);
      players.push({
        name: `Player ${i}`,
        hand,
      })
    }
    return players
  }

  drawCards = (deck, times) => {
    const drawn =[];
    for (let i = 0; i < times; i++){
      drawn.push(deck.pop())
    }
    return drawn
  }

  performRound = () => {
    // increment round

    this.setState((prevState) => {
      // Increment the game round
      let round = prevState.round + 1 === 4 ? 'final' : prevState.round + 1;
      // Make a copy of the deck (deck = array of objects)
      let deck = [...prevState.deck];
      // Make a copy of players (player = array of objects)
      let players = [...prevState.players];
      // Map through copied players array
      players.map((player) => {
        // Make a copy of the hand (hand = array of objects)
        let newHand = [...player.hand];
        // Pop a card off deck and add to hand
        newHand.push(deck.pop());
        // Return a copy of player object using new, updated hand
        return Object.assign(player, {hand: newHand})
      })
      // Return a copy of state with the updated deck, round counter and players array
      return {deck, round, players}
    })
  }


  render() {
    return (
      <div className={'GameWindow'}>
        <div className={'GameWindow-game-panel'}>
          <button onClick={() => this.props.toggleInPlay(false)}>End Game</button>
          <PeersPanel peers={this.state.players.slice(1)} />
        </div>
        <div className={'GameWindow-player-panel'}>
          <Market />
          <Hand player={this.state.players[0]} />
          <ActionPanel performRound={this.performRound} round={this.state.round} />
        </div>
      </div>
    )
  }
}
