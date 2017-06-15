/**
 * @Author: will
 * @Date:   2017-05-26T14:36:06+08:00
 * @Filename: ChildPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T15:10:53+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import StackOptions from '../../common/StackOptions';
import BackIcon from '../../commonview/BackIcon';

export default class ChildPage extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
    ...StackOptions(navigation),
    headerTitle: '子页面',
  })

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
