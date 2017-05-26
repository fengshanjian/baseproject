/**
 * @Author: will
 * @Date:   2017-05-26T14:36:06+08:00
 * @Filename: ChildPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T15:23:46+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BaseComponent from '../BaseComponent';

export default class ChildPage extends BaseComponent {

  render() {
    return (
      <View style={styles.container}>
        <Text>这是子页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
