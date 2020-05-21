import { ADD_ONE } from './counterTypes.js'

let initialState = 0


function handleChange(state, change) {
  return ({
    counter: state.counter + change,
  })
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ONE:
      return state += 1;
    default:
      return state;
  };
}

export default counterReducer
