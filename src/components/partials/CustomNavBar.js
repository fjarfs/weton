import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: 'black',
    borderColor:'white',
    borderBottomWidth: 0.9,
  },
  navBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarItemText: {
    fontFamily: 'ProximaNova-Bold',
    color: '#fff',
    fontSize: 20,
  },
});

export default class CustomNavBar extends React.Component {

  _renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.navBarItemText}>TITLE</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderMiddle()}
      </View>
    );
  }
}