import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.topContent}>
						<Text style={styles.topText}>Neptu</Text>
				</View>
			</View>
    );
  }
}
