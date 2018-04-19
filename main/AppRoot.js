/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T16:16:07+08:00
 * @Filename: AppRoot.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:32:51+08:00
 */


import React, { Component } from 'react';
import { SwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screen/auth/AuthLoadingScreen';
import LoginPage from '../screen/auth/LoginPage';
import AppScreens from './AppScreens';


export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    MainApp: AppScreens,
    Auth: LoginPage,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
