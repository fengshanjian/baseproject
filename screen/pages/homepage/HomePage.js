/**
 * @Author: will
 * @Date:   2017-05-25T19:57:05+08:00
 * @Filename: HomePage.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T15:19:16+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

export default class HomePage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  }
  static navigationOptions =({ navigation }) => ({
    title: '主页',
    headerLeft: (
      <TouchableOpacity
        onPress={() => { navigation.navigate('DrawerToggle'); }}
        style={{ marginLeft: 10, height: 25, width: 30 }}
      >
        <Icon
          name="list"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    ),
  })
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
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
