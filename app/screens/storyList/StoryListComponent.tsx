/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

import styles from './StoryListStyle';

export interface Props {
  navigation: any;
  id: string;

}

interface S {
  postsData: any;
  pageCount: number;
  limit: number;
  loading: boolean;
  pageLoader: boolean;
  pullToRefresh: boolean;
  onEndReachedCalledDuringMomentum: boolean;
  lastLoadCount: number;
  filterData: any;
  showEmptyView: boolean;
  notFinalLoad: any;
}

interface SS {
  id: any;
}

class StoryListComponent extends Component<Props, S, SS> {
  constructor(props: any) {
    super(props);
    this.state = {
      postsData: [],
      pageCount: 0,
      limit: 20,
      loading: true,
      pageLoader: false,
      pullToRefresh: false,
      onEndReachedCalledDuringMomentum: true,
      lastLoadCount: 0,
      filterData: this.props.insightsFilter,
      showEmptyView: false,
      notFinalLoad: null,
    }
  }

  componentDidMount() {
    this.fetchPostsRequest();
    setInterval(() => {
      this.setState({ pageCount: this.state.pageCount + 1 }, () => {
        this.fetchPostsRequest();
      });
    }, 10000);
  }

  //*> Fetch Story Data 
  fetchPostsRequest = async () => {
    try {
      let response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageCount}`
      );
      let json = await response.json();

      this.setState({
        postsData: this.state.postsData.concat(json.hits),
        pageLoader: false,
        lastLoadCount: this.state.postsData.concat(json.hits).length,
        onEndReachedCalledDuringMomentum: this.state.postsData.concat(json.hits).length >= this.state.limit ? true : false,
        notFinalLoad: this.state.postsData.concat(json.hits).length >= this.state.limit ? true : false
      });
      return;
    } catch (error) {
      console.error(error);
    }
  }

  //*> On End Reached of the List Fetch data again

  onEndReached = () => {
    if (!this.state.onEndReachedCalledDuringMomentum) {
      this.setState({ onEndReachedCalledDuringMomentum: true }, () => {
        setTimeout(() => {
          if (
            this.state.lastLoadCount >= this.state.limit &&
            this.state.notFinalLoad
          ) {
            this.setState(
              {
                pageLoader: true,
                pageCount: this.state.pageCount + 1
              },
              () => {
                // Then we fetch more data;
                this.fetchPostsRequest();
              });
          }
        }, 1500);
      });
    }
  };

  // Key Extractor
  _keyExtractor = (item: any, index: any) => item.id;

  // Check if list has started scrolling
  _onMomentumScrollBegin = () =>
    this.setState({ onEndReachedCalledDuringMomentum: false });

  //*> On Navigate to story detail screen
  onPressCellRow = (item: any) => {
    this.props.navigation.navigate('JSONRawComponent', { rawData: item });
  }

  renderCellDataContenar(item: any) {
    return (
      <TouchableOpacity onPress={() => this.onPressCellRow(item)} style={styles.itemCellContainer}>
        <Text style={styles.data}>Title: {item.title}</Text>
        <Text style={styles.data}>URL: {item.url}</Text>
        <Text style={styles.data}>Created at: {item.created_at}</Text>
        <Text style={styles.data}>Author: {item.author}</Text>
      </TouchableOpacity>
    )
  }

  // Footer loader for Pagination  
  _renderSearchResultsFooterSym = () => {
    return this.state.pageLoader ? (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={'#000000'} />
      </View>
    ) : null;
  };

  renderPostsListData() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.postsData}
          renderItem={({ item }) => this.renderCellDataContenar(item)}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          onEndReachedThreshold={0.01}
          onEndReached={() => this.onEndReached()}
          ListFooterComponent={this._renderSearchResultsFooterSym}
          onMomentumScrollBegin={() => this._onMomentumScrollBegin()}
        />
      </View>
    )
  }

  render() { 
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/bgImg.png')}
        style={styles.bgImg}>
        {this.renderPostsListData()}
        </ImageBackground>
      </SafeAreaView>
    );
  };
}



export default StoryListComponent;
