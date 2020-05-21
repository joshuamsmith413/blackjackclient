import React from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './App.css';
import MainContainer from '../src/containers/MainContainer/MainContainer.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
