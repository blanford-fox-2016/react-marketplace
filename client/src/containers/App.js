import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../actions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

let mapStateToProps = (state) => {
  return {
    reducers_products: state.reducers_products
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
