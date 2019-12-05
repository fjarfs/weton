import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import styles from './styles';

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.topContent}>
						<Text style={styles.topText}>Home</Text>
				</View>
        <Text></Text>
			</View>
    );
  }
}
