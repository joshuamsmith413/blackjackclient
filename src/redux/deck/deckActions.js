import {
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE
} from './deckTypes.js'

export const fetchDeckRequest = () => {
  return {
    type: FETCH_DECK_REQUEST
  }
}

export const fetchDeckSuccess = deck => {
  return {
    type: FETCH_DECK_SUCCESS,
    payload: deck
  }
}

export const fetchDeckFailure = error => {
  return {
    type: FETCH_DECK_FAILURE,
    payload: error
  }
}

export const fetchCards = () => {
  return async(dispatch) => {
    try {
      dispatch(fetchDeckRequest)
      const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      const data = await res.json()
      console.log('here is data',data)
      dispatch(fetchDeckSuccess(data))
    } catch(error) {
      dispatch(fetchDeckFailure(error))
      console.log(error)
    }
  }
}
