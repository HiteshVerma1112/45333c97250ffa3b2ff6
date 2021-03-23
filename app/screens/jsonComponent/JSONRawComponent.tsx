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
} from 'react-native';
import styles from './JsonComponentstyle'

//*> Functional Component(Stateless component)
const jsonRawComponent = (navigation: any) => {
  return (
    <SafeAreaView style={styles.containerBg}>
      <Text style={styles.detailText}>{JSON.stringify(navigation.route.params.rawData)}</Text>
    </SafeAreaView>
  );
};

export default jsonRawComponent;