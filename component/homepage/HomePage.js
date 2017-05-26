/**
 * @Author: will
 * @Date:   2017-05-25T19:57:05+08:00
 * @Filename: HomePage.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T15:26:39+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


export default class HomePage extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
