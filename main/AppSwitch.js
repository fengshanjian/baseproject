/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T16:16:07+08:00
 * @Filename: AppSwitch.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T15:18:03+08:00
 */


import React, { Component } from 'react';
import { SwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screen/auth/AuthLoadingScreen';
import LoginPage from '../screen/auth/LoginPage';
import AppStack from './AppStack';
import AppDraw from './AppDraw';

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    MainApp: AppStack,
    Auth: LoginPage,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
