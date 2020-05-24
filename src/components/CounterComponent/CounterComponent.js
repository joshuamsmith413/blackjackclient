import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addOne, addFive, addInput } from '../../redux'


const CounterComponent = (props) => {

  const [number, setNumber] = useState('');

const handleChange = e => {
  setNumber(e.target.value)
}

const submisson = (e) => {
  e.preventDefault()
  console.log(number, 'submis')
  props.addInput(number)
}

  return(
    <div>
      <h2>{props.counter}</h2>
      <button onClick={props.addFive}>
        Add Five
      </button>
      <button onClick={props.addOne}>
        Add One
      </button>
      <input type="number" value={number} onChange={handleChange}></input>
      <button onClick={submisson}>add input</button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch(addOne()),
    addFive: () => dispatch(addFive()),
    addInput: () => dispatch(addInput())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
