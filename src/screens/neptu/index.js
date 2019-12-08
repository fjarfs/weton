import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList } from 'react-native';
import styles from './styles';
import { NeptuCard, DataNotFound } from '@partials';
import { CommonService } from '@services';
import { ShimmerHariLahir } from './Shimmer/shimmer';

export default class HelloWorldApp extends Component {
  state = {
    loaded: false,
    isRefreshing: false,
    category_id: null,
    last_page: true,
    page: 1,
    per_page: 7,
    hari: [],
  }

  componentWillMount() {
    StatusBar.setBarStyle('dark-content');
    this.loadHari();
    StatusBar.setBarStyle('light-content');
    
  }

  handleLoadMore = () => {
    if (this.state.last_page == false) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.loadHari();
      });
    }
  };

  loadHari() {
    return new Promise((resolve, reject) => {
        this.setState({
            loaded: false,
        });
      const params = {
        page: this.state.page,
        per_page: this.state.per_page,
      };
      CommonService.getNeptu(params).then((hari) => {
        this.setState({
            hari: this.state.page === 1 ? hari.data.data : [...this.state.hari, ...hari.data.data],
          loaded: true,
          isRefreshing: false,
          last_page: hari.data.next_page_url ===  null ? true : false
        });
        resolve(hari);
      }).catch((err) => {
        reject(err);
      });
    });
  }

    handleRefresh = () => {
        this.setState({
            page: 1
        }, () => {
            this.loadHari();
        });
    }

    renderItem({item}) {
        return <NeptuCard item={item} />;
    }

  renderList() {
    
    return (
      <View style={{ flex: 1}}>
        <FlatList
              data={this.state.hari} 
              style={{ borderTopWidth: 1, borderColor: '#ececec',  }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.3}
              onEndThreshold={0}
              refreshing={this.state.isRefreshing}
              numColumns={1}
              onRefresh={this.handleRefresh}
            />
      </View>
    );
  }

  render() {
    
    if (this.state.loaded) {
        if(this.state.hari.length <= 0) {
            return (
                <DataNotFound onPress={this.handleRefresh}/>
            );
        }
        return (
          <View style={styles.container}>
          <View style={styles.topContent}>
                <Text style={styles.topText}>Neptu</Text>
            </View>
              <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row' }}>
                  {this.renderList()}
              </View>
              </View>
        );
    }
    return (
      <View style={styles.container}>
        <View style={styles.topContent}>
              <Text style={styles.topText}>Neptu</Text>
          </View>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <ShimmerHariLahir />
        </View>
      </View>
    );
  }
}
