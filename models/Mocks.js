import Card from './Card'
import Deck from './Deck'

let MockCards = [
  new Card('Weakly and Static Typed', 'Dynamic Typing', 'fakeDeckID'),
  new Card('Higher order functions', 'No type checks', 'fakeDeckID')
]

let MockCard = MockCards[0]
let MockDecks = [new Deck('JavaScript'), new Deck('TypeScript')]

MockDecks.map(deck => {
  deck.addCard(new Card('Weakly and Static Typed', 'Dynamic Typing', deck.id))
  deck.addCard(new Card('Higher order functions', 'No type checks', deck.id))
  return deck
})

let MockDeck = MockDecks[0]

export { MockCards, MockCard, MockDecks, MockDeck }
