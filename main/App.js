/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T17:26:01+08:00
 * @Filename: App.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:26:34+08:00
 */


import React, { Component } from 'react';
import { NetInfo, DeviceEventEmitter, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import AppRoot from './AppRoot';
import NavigationService from '../common/NavigationService';
import appConfig from '../config/appConfig';

export default class App extends Component {
  componentDidMount() {
    this.addPushListener();
    this.addNetStateListener();
    // splash页面展示
    if (appConfig.APP_SPLASH) {
      this.timer = setTimeout(
        () => {
          SplashScreen.hide();
        },
        appConfig.SPLASH_TIME * 1000,
      );
    }
  }
  componentWillUnmount() {
    const self = this;
    NetInfo.removeEventListener(
      'connectionChange',
      self.handleNetInfoChange,
    );
    DeviceEventEmitter.removeAllListeners();
  }
  // 添加网络状态变化监听
  addNetStateListener() {
    const self = this;
    NetInfo.isConnected.fetch().done((isConnected) => {
      console.log(`net isConnected:${isConnected}`);
      global.isConnected = isConnected;
    });
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      self.handleNetInfoChange,
    );
  }
  // 添加推送消息的监听
  addPushListener() {
    DeviceEventEmitter.addListener('PushToken', this.handleToken.bind(this));
    DeviceEventEmitter.addListener('PushBody', this.handlePushUserInfo.bind(this));
  }
  // 网络监听
  handleNetInfoChange(isConnected) {
    global.isConnected = isConnected;
    console.log(`net isConnected:${isConnected}`);
  }
  // 推送消息处理
  handlePushUserInfo(userInfo) {
    console.log('native推送' + JSON.stringify(userInfo));
    console.log(userInfo.aps.alert);
    // const _userInfo = JSON.parse(userInfo);
    // console.log(JSON.stringify(_userInfo));
    // TODO 处理推送消息
  }
  // 接收到推送token
  handleToken(token) {
    console.log('pushtoken:' + token);
    global.pushToken = token;
    AsyncStorage.setItem('push_token', token);
  }

  render() {
    return (
      <AppRoot
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
