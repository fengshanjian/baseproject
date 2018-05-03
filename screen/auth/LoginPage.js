/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T16:46:26+08:00
 * @Filename: LoginPage.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-20T15:53:18+08:00
 */


import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import Loader from '../../common/Loader';

export default class LoginPage extends Component {
  static propTypes = {
    navigation: PropTypes.any,
  }
  loginClick = () => {
    Loader.show('正在登录...');
    setTimeout(() => {
      Loader.hide();
      this.props.navigation.navigate('MainApp');
    }, 2 * 1000);
  };
  render() {
    return (
      <View style={styles.container} >
        <Text h4 style={{ marginTop: 100 }}>
          {'登录'}
        </Text>
        <Input
          containerStyle={{
            marginTop: 30, borderColor: '#000', borderWidth: 0.5, borderRadius: 10,
          }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="用户名"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          containerStyle={{
            marginTop: 30, borderColor: '#000', borderWidth: 0.5, borderRadius: 10,
          }}
          placeholder="密码"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Button
          containerStyle={{ marginTop: 50, width: 280, height: 50 }}
          title="登录"
          onPress={this.loginClick}
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
  },
});
