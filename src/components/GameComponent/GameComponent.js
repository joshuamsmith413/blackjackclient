import React from 'react'
import { connect } from 'react-redux'
import { fetchCards, addOne } from '../../redux'


const GameComponent = (props) => {


  return(
    <div>
      <h2>{props.deck.deck_id}</h2>
      <button onClick={props.fetchCards}>
        Start
      </button>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    deck: state.deck,
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch(addOne()),
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);
