import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from './reducers'

import { createStore } from 'redux'
const initialState = {tech: 'Redux'};
const store = createStore(reducer, initialState);

class App extends Component {
  // state = {
  //   tech: "React"
  // };
  //State removed to be managed by the Redux Store
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
