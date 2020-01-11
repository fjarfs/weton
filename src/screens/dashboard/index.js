import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import globalStyles from '../../assets/styles/global';
import {Button, Input, Datepicker} from '@partials';
import { ScrollView } from 'react-native-gesture-handler';

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContentTitle}>
              <Text style={styles.topText}>WETON</Text>
          </View>
        <ScrollView>
        <View style={styles.topContent}>
              <Image source={require('@images/weton-2.png')} style={{width: 80, height: 80, top: -35}} resizeMode="contain"/>
          </View>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>
              Isi Identitas Anda dan Pasangan Anda!
            </Text>
          </View>
          <View style={{padding: 10}}>
          <View style={globalStyles.formControl}>
              <Input
                placeholder="Nama Anda"
                label="Nama Anda"
                flexItem={{flex: 1}}
                style={styles.inputStyle}
                placeholderTextColor={'#b2b2b2'}
                // value={this.props.loginForm.username}
                // onChangeText={this.usernameChanged.bind(this)}
              />
            </View>
            <View style={globalStyles.formControl}>
              <Datepicker
                testID={"birthDate"}
                date={this.props.birth_date}
                // onDateChange={this.onDateChange.bind(this)}
                // error={this.state.dateError}
              />
            </View>
            <View style={globalStyles.formControl}>
              <Input
                placeholder="Nama Pasangan Anda"
                label="Nama Pasangan Anda"
                flexItem={{flex: 1}}
                style={styles.inputStyle}
                placeholderTextColor={'#b2b2b2'}
                // value={this.props.loginForm.username}
                // onChangeText={this.usernameChanged.bind(this)}
              />
            </View>
            <View style={globalStyles.formControl}>
              <Datepicker
                testID={"birthDate"}
                date={this.props.birth_date}
                // onDateChange={this.onDateChange.bind(this)}
                // error={this.state.dateError}
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
        </ScrollView>
				
			</View>
    );
  }
}
