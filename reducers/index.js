import { MockDecks } from './../models/Mocks'
import DecksReducer from './decks'

const initialState = () => ({ decks: MockDecks })

const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action)
  return { decks }
}

export default reducer
