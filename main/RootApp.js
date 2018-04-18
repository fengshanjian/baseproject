/**
 * @Author: will
 * @Date:   2017-05-25T11:34:03+08:00
 * @Filename: RootApp.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-17T15:04:53+08:00
 */

/* eslint-disable new-cap */

import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
// import MainApp from './MainApp';
import MainApp from './Tabs';
import ChildPage from '../component/childpage/ChildPage';
import LoginPage from '../component/loginpage/LoginPage';

const RootApp = StackNavigator({
  MainApp: { screen: MainApp },
  ChildPage: { screen: ChildPage },
  LoginPage: { screen: LoginPage },
}, {
  headerMode: 'screen',
  transitionConfig: Platform.OS === 'android' ? () => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  }) : null,
});

export default RootApp;
