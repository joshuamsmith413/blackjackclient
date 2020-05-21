import {
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
} from './deckTypes.js'

const initialState = {
  loading: false,
  deck: {},
  error: ''
}

const deckReducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DECK_REQUEST:
    return {
      ...state,
      loading: true,
    }

    case FETCH_DECK_SUCCESS:
    return {
      loading: false,
      ...action.payload,
      error: ''
    }

    case FETCH_DECK_FAILURE:
    return {
      loading: false,
      deck: {},
      error: action.payload
    }
    default: return state
  };
}

export default deckReducers
