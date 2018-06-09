import { LOAD_DATA, ADD_DECK, ADD_CARD } from '../actions/types'
import Deck from './../models/Deck'
import { writeDecks } from './../utils'

function decksWithNewCard(oldDecks, card) {
  let newState = oldDecks.map(deck => {
    if (deck.id === card.deckId) {
      deck.addCard(card)
    } 
    return deck 
  })
  saveDecks(newState)
  return newState
}

function saveDecks(state) {
  writeDecks(state)
  return state
}

const reducer = (state = [], action) => {
  const currentDecks = {...state}
  switch (action.type) {
    case LOAD_DATA:
      return action.data
      break;
    case ADD_DECK:
      let newState = state.concat(action.data)
      saveDecks(newState)
      return newState
      break;
    case ADD_CARD:
      return decksWithNewCard(state, action.data)
      break;
    default:
	  return state
  }
  return state
}

export default reducer