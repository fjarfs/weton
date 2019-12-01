import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CustomTabBar extends Component {
  tabIcons = [];

  isNotComplete() {
    return false;
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (

            <TouchableHighlight key={tab}
            onPress={() => this.props.goToPage(i)}
            style={styles.tab}
            accessible={true}
            accessibilityLabel={this.props.titles[i]}
            testID={this.props.titles[i]}>
            <Icon
              name={tab}
              size={25}
              color={
                this.props.activeTab === i ? '#D81B60' : 'rgb(204,204,204)'
              }
              ref={icon => {
                this.tabIcons[i] = icon;
              }}
            />
            {/* <Text
              style={[
                {fontFamily: 'ProximaNova-Regular', fontSize: 12},
                {
                  color:
                    this.props.activeTab === i
                      ? '#D81B60'
                      : 'rgb(204,204,204)',
                },
              ]}>
              {this.props.titles[i]}
            </Text>> */}
        </TouchableHighlight>

            // <TouchableOpacity
              // key={tab}
              // onPress={() => this.props.goToPage(i)}
              // style={styles.tab}
              // accessible={true}
              // accessibilityLabel={this.props.titles[i]}
              // testID={this.props.titles[i]}>
              // <Icon
              //   name={tab}
              //   size={25}
              //   color={
              //     this.props.activeTab === i ? '#D81B60' : 'rgb(204,204,204)'
              //   }
              //   ref={icon => {
              //     this.tabIcons[i] = icon;
              //   }}
              // />
              // <Text
              //   style={[
              //     {fontFamily: 'ProximaNova-Regular', fontSize: 12},
              //     {
              //       color:
              //         this.props.activeTab === i
              //           ? '#D81B60'
              //           : 'rgb(204,204,204)',
              //     },
              //   ]}>
              //   {this.props.titles[i]}
              // </Text>
            // </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  tabs: {
    height: 60,
    bottom: -1,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  },
  badge: {
    backgroundColor: '#D81B60',
    position: 'absolute',
    top: 5,
    left: 20,
    height: 12,
    width: 12,
    borderRadius: 20,
  },
});

export default CustomTabBar;
