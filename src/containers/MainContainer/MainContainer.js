import React from 'react';
import PropTypes from 'prop-types';
import GameComponent from '../../components/GameComponent/GameComponent.js';
import CounterComponent from '../../components/CounterComponent/CounterComponent.js';

const MainContainer = () => (
  <div>
    <GameComponent />
    <CounterComponent />
  </div>
);

export default MainContainer;
