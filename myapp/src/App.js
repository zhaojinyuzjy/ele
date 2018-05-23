import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import actionCreator from './store/common/actionCreator';
import Home from '../src/components/pages/Home'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Home/>
      </div>
    );
  }
}

export default App
