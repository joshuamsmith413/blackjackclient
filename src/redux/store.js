import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import deckReducer from './deck/deckReducers.js'
import rootReducer from './rootReducer.js'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store
