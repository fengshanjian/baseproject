/**
 * @Author: will
 * @Date:   2017-05-25T19:57:05+08:00
 * @Filename: HomePage.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:12:01+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import StackOptions from '../../../common/StackOptions';

export default class HomePage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  }
  static navigationOptions = ({ navigation }) => ({
    ...StackOptions(navigation),
    headerTitle: '主页',
    headerLeft: null,
  })
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>
          这是主页
        </Text>
        <Button
          onPress={() => navigate('ChildPage')}
          title="子页面"
        />
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
