import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.images}>
        <Image style={{ flex: 1 }} source={require('@images/weton-1.png')} resizeMode="contain"/>
        </View>

        <View style={styles.bottomContent}>
						<Text style={styles.appText}>App Version</Text>
				</View>
        <View style={styles.bottomContent}>
						<Text style={styles.versionText}>1.1.0</Text>
				</View>
			</View>
    );
  }
}
