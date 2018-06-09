import CardModel from './Card'
import DeckModel from './Deck'

let MockCards = [
  new CardModel('Weakly and Static Typed', 'Dynamic Typing', 'fakeDeckID'),
  new CardModel('Higher order functions', 'No type checks', 'fakeDeckID')
]

let MockCard = MockCards[0]
let MockDecks = [new DeckModel('JavaScript'), new DeckModel('TypeScript')]

MockDecks.map(deck => {
  deck.addCard(new CardModel('Weakly and Static Typed', 'Dynamic Typing', deck.id))
  deck.addCard(new CardModel('Higher order functions', 'No type checks', deck.id))
  return deck
})

let MockDeck = MockDecks[0]

export { MockCards, MockCard, MockDecks, MockDeck }
