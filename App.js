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
  ToastAndroid,
  Alert
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/CombineReducer';
import Weton from './src/router';
import NetInfo from '@react-native-community/netinfo';
import callAlert from '@helpers/CustomAlert';

const store = createStore(
  reducers
);

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.CheckConnectivity();
  }

  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected === false) {
          callAlert('Peringatan!', 'Tidak ada koneksi internet');
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      callAlert('Peringatan!', 'Tidak ada koneksi internet');
    }
  };

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // debug network
    // To see all the requests in the chrome Dev tools in the network tab.
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
      ? GLOBAL.originalXMLHttpRequest
      : GLOBAL.XMLHttpRequest;
    // fetch logger
    global._fetch = fetch;
    global.fetch = function(uri, options, ...args) {
      return global._fetch(uri, options, ...args).then(response => {
        return response;
      });
    };
    // await this.checkPermission();
    // await PermissionHelpers.requestReadSmsPermission();
    // this.checkAppsInfo();

    
  }

  


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
