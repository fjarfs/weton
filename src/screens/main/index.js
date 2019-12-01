import React, { Component } from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {
  DashboardComponent,
  HariComponent,
  NeptuComponent,
  AboutComponent,
} from '@screens';
import { CustomTabBar } from '@partials';

class MainComponent extends Component {

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={1}
        tabBarPosition={'bottom'}
        renderTabBar={() => <CustomTabBar titles={['Home', 'Hari', 'Neptu', 'About']} />}
      >
        <DashboardComponent tabLabel="home" />
        <HariComponent tabLabel="event" />
        <NeptuComponent tabLabel="assessment" />
        <AboutComponent tabLabel="settings-applications" />
      </ScrollableTabView>
    );
  }

}

export default MainComponent;
