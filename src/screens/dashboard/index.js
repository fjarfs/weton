import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {

  render() {
  
    const styles = StyleSheet.create({
      text: {
        color: 'white'
      }
    });

    return (
      <View >
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}
