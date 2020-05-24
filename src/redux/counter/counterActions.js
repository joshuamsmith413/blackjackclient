import { ADD_ONE, ADD_FIVE, ADD_INPUT } from './counterTypes.js'

export const addOne = () => {
  return {
    type: ADD_ONE
  }
}

export const addFive = () => {
  return {
    type: ADD_FIVE
  }
}

export const addInput = number => {
  return {
    type: ADD_INPUT,
    payload: number
  }
}
