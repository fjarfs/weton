import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import globalStyles from '../../assets/styles/global';
import {Button, Input} from '@partials';

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.topContent}>
						<Text style={styles.topText}>WETON</Text>
            <Image source={require('@images/weton-2.png')} style={{width: 100, height: 100}} resizeMode="contain"/>
				</View>
        <View style={globalStyles.formControl}>
            <Input
              placeholder="Username / Email"
              label="Username / Email"
              flexItem={{flex: 1}}
              style={styles.inputStyle}
              placeholderTextColor={'#b2b2b2'}
              // value={this.props.loginForm.username}
              // onChangeText={this.usernameChanged.bind(this)}
            />
          </View>
          <View style={globalStyles.formControl}>
            <Input
              placeholder="Password"
              label="Password"
              secureTextEntry
              style={styles.inputStyle}
              placeholderTextColor={'#b2b2b2'}
              // value={this.props.loginForm.password}
              // onChangeText={this.passwordChanged.bind(this)}
            />
          </View>
          <View style={globalStyles.formControl}>
            <Button
              style={styles.buttonStyle}
              textStyle={styles.textStyle}
              // onPress={this.redirectLogin.bind(this)}
              >
              LOGIN
            </Button>
          </View>
			</View>
    );
  }
}
