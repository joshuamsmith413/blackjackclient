import { ADD_ONE, ADD_FIVE, ADD_INPUT } from './counterTypes.js'

let initialState = 0

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ONE:
      return state + 1;
      case ADD_FIVE:
      return state + 5;
      case ADD_INPUT:
      return state + action.payload
    default: return state;
  };
}

export default counterReducer
