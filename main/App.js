/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T17:26:01+08:00
 * @Filename: App.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T15:39:45+08:00
 */


import React, { Component } from 'react';
import { NetInfo, DeviceEventEmitter, AsyncStorage, YellowBox } from 'react-native';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import AppSwitch from './AppSwitch';
import NavigationService from '../common/NavigationService';
import appConfig from '../config/appConfig';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
  componentDidMount() {
    appConfig.baseUrl();// 配置分离获取服务器地址
    this.addNetStateListener();
    // splash页面展示
    this.timer = setTimeout(
      () => {
        SplashScreen.hide();
      },
      appConfig.SPLASH_TIME * 1000,
    );
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

  // 网络监听
  handleNetInfoChange(isConnected) {
    global.isConnected = isConnected;
    console.log(`net isConnected:${isConnected}`);
  }

  render() {
    return (
      <AppSwitch
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
