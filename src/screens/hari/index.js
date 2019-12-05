import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {
  HariLahirComponent,
} from '@screens';
import styles from './styles';

class HariComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.topContent}>
						<Text style={styles.topText}>Hari</Text>
				</View>
        <Text></Text>
        <ScrollableTabView
          scrollEnabled={false}
          style={styles.ScrollableTabView}
          initialPage={0}
          tabBarActiveTextColor='#D81B60'
          tabBarUnderlineStyle={{ backgroundColor: "#D81B60" }}
          tabBarInactiveTextColor='black'
          renderTabBar={() => <DefaultTabBar />}
        >
          <HariLahirComponent tabLabel='Hari Lahir' />
          <Text tabLabel='Hari Pasaran Jawa'>favorite</Text>
        </ScrollableTabView>
			</View>

      
    );
  }
}

export default HariComponent;