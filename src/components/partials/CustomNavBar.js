import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    height: Platform.Version <= 19 ? 55 : 70,
    flexDirection: 'row',
    backgroundColor: '#DC1E2D',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    paddingTop: Platform.Version <= 19 ? 0 : 20,
  },
  navBarItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarItemText: {
    fontFamily: 'ProximaNova-Bold',
    color: '#fff',
    fontSize: 20,
    paddingLeft: 30,
  },
});

export default class CustomNavBar extends React.Component {
  componentWillMount() {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }

  _renderLeft() {
    return (
      <TouchableOpacity onPress={Actions.pop} style={[styles.navBarItem]}>
        <Icon name="keyboard-arrow-left" size={36} color="#fff" />
        {this.props.title ? (
          <Text style={styles.navBarItemText}>
            {this.props.title.length > 26
              ? `${this.props.title.substring(0, 26).replace(/\s+$/, '')}...`
              : this.props.title}
          </Text>
        ) : null}
      </TouchableOpacity>
    );
  }

  _renderMiddle() {
    return <View style={styles.navBarItem} />;
  }

  _renderRight() {
    return (
      <View
        style={[
          styles.navBarItem,
          {flexDirection: 'row', justifyContent: 'flex-end'},
        ]}>
        <TouchableOpacity
          onPress={this.props.rightPress}
          style={{paddingRight: 10}}>
          <Icon name={this.props.withIcon} size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  // render() {
  //   return (
  //     <ImageBackground
  //       style={styles.container}
  //       source={require('@images/warung-sadulur-header.png')}>
  //       {this._renderLeft()}
  //       {this._renderMiddle()}
  //       {this.props.withIcon ? this._renderRight() : null}
  //     </ImageBackground>
  //   );
  // }
}
