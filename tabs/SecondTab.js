/**
 * @Author: will
 * @Date:   2017-05-31T11:48:18+08:00
 * @Filename: SecondPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T14:37:58+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

export default class SecondPage extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          第二个Tab页面
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
