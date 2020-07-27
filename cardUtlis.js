

const createDeck = () => {
  let suits = ['spades', 'diamonds', 'clubs', 'hearts']
  let values = ["A","2","3","4","5","6","7","8","9", "10", "J", "Q", "K"]
  let newDeck = [];

  for (let suit of suits) {
    for (let value of values) {
      newDeck.push({
        Suit: suit,
        Value: value
      })
    }
  }
  return newDeck
}



const shuffle = (deck) => {
  // switch two cards in the deck 1000 times
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let temp = deck[location1]

    deck[location1] = deck[location2];
    deck[location2] = temp;
  }

}


const createPlayers = (numOfPlayers) => {
  let players = []
  for (let i = 0; i < numOfPlayers; i++){
    players.push({
      player: i + 1,
      hand: [],
    })
  }
  return players;
}

console.log(createPlayers(4))

// multiple players
const deal = (deck, playersArray, numOfCards) => {
  return playersArray.map( (player) => {
    for (let j = 0; j < numOfCards; j++){
      console.log("Player", player)
      player.hand.push(deck.pop())
    }
    return player
  })
}



// let newcards = createDeck(suits,values)
let deck = createDeck()
shuffle(deck)
let players = createPlayers(4)
deal(deck, players, 3)
