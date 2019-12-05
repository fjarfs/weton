import React, { Component } from 'react';
import { View, FlatList, StatusBar, Text, ScrollView } from 'react-native';
import { HariCard } from '@partials';
import { CommonService } from '@services';
import { ShimmerHariLahir } from './Shimmer/shimmer';

class HariLahirComponent extends Component {
  state = {
    loaded: false,
    isRefreshing: false,
    category_id: null,
    last_page: null,
    page: 1,
    per_page: 5,
    data: []
  }

  componentWillMount() {
    StatusBar.setBarStyle('dark-content');
    this.loadHari();
    StatusBar.setBarStyle('light-content');
  }

  async loadHari () {
    CommonService.gethari().then((data) => {
        this.setState({
            data: data.data,
        });
        this.setState({ loaded: true });
    });
  }

  handleLoadMore = () => {
    if (this.state.page < this.state.last_page) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.loadNews();
      });
    }
  };

  childHandler(parameter) {
    this.setState({
      page: 1,
    }, () => {
      this.loadNews(true);
    });
  }

  loadNews(isInit = false) {
    return new Promise((resolve, reject) => {
        this.setState({
            loaded: false,
        });
      const params = {
        page: this.state.page,
        per_page: this.state.per_page,
      };
      CommonService.gethari(params).then((news) => {
        this.setState({
          data: this.state.page === 1 ? news.data : [...this.state.news, ...news.data],
          loaded: true,
          isRefreshing: false,
        });
        if (isInit) {
          this.setState({
            last_page: news.last_page
          });
        }
        resolve(news);
      }).catch((err) => {
        reject(err);
      });
    });
  }

    handleRefresh = () => {
        this.setState({
            page: 1
        }, () => {
            this.loadNews();
        });
    }

    renderItem({item}) {
        return <HariCard item={item} />;
    }

  renderList() {
    return (
      <View style={{ flex: 14 }}>
        <FlatList
              data={this.state.data.data} 
              style={{ borderTopWidth: 1, borderColor: '#ececec',  }}
              keyExtractor={i => i.id.toString()}
              renderItem={this.renderItem}
              onEndReached={this.handleLoadMore}
              onEndThreshold={0}
              refreshing={this.state.isRefreshing}
              numColumns={2}
              onRefresh={this.handleRefresh}
            />
      </View>
    );
  }

  render() {
      
    if (this.state.loaded) {
      return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* <ScrollSegment items={this.state.categories} parentCallback={this.childHandler.bind(this)} /> */}
            {this.renderList()}
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <ShimmerHariLahir />
      </View>
    );
  }
}

export default HariLahirComponent;
