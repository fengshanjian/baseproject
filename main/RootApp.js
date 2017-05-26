/**
 * @Author: will
 * @Date:   2017-05-25T11:34:03+08:00
 * @Filename: RootApp.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T20:04:13+08:00
 */


import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import MainApp from './MainApp';

import ChildPage from '../component/childpage/ChildPage';
import navigationOptions from '../common/navigationOptions';

const RootApp = StackNavigator({
  MainApp: { screen: MainApp },
  ChildPage: { screen: ChildPage },
});

export default RootApp;
