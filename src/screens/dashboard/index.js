import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.topContent}>
						<Text style={styles.topText}>WETON</Text>
            <Image source={require('@images/weton-2.png')} style={{width: 100, height: 100}} resizeMode="contain"/>
				</View>
        <Text></Text>
			</View>
    );
  }
}
