/**
 * @Author: will
 * @Date:   2017-05-25T11:34:03+08:00
 * @Filename: RootApp.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T17:29:13+08:00
 */


import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import MainApp from './MainApp';

import ChildPage from '../component/childpage/ChildPage';
import NavigationStyles from './NavigationStyles';

const RootApp = StackNavigator({
  MainApp: {
    screen: MainApp,
    navigationOptions: {
      headerTitle: '主页',
      headerBackTitle: '返回',
      headerStyle: NavigationStyles.headerStyle,
      headerTitleStyle: NavigationStyles.headerTitleStyle,
    },
  },
  ChildPage: {
    screen: ChildPage,
    navigationOptions: {
      headerTitle: '子页面',
    },
  },
});

export default RootApp;
