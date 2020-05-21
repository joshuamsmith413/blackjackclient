import { combineReducers } from 'redux'
import deckReducer from './deck/deckReducers'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
  deck: deckReducer,
  counter: counterReducer
})

export default rootReducer
