import { combineReducers } from 'redux'
import deckReducers from './deck/deckReducers'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
  deck: deckReducers,
  counter: counterReducer
})

export default rootReducer
