import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'API_KEY',
      authDomain: 'XXXX.firebaseapp.com',
      databaseURL: 'https://XXXX.firebaseapp.com',
      projectId: 'XXXX-XXXX',
      storageBucket: 'XXXX.appspot.com',
      messagingSenderId: 'XXXXX'
    });
  }
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    )};
}