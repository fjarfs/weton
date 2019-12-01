/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/CombineReducer';
import Weton from './src/router';

const store = createStore(
  reducers
);

class AppComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Provider store={store}>
          <Weton />
        </Provider>
      </View>
    );
  }
};

export default AppComponent;
