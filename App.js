import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { setLocalNotification } from './utils'
import Main from './components/Main'

import reducer from './reducers'
const store = createStore(reducer)

export default class App extends React.Component {
  componentDidMount(){
	if (this.input) {
      this.input.focus();
    }
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
