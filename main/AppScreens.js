/**
 * @Author: will
 * @Date:   2017-05-25T11:34:03+08:00
 * @Filename: AppScreens.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:21:12+08:00
 */

/* eslint-disable new-cap */

import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import HomePage from '../screen/pages/homepage/HomePage';

import ChildPage from '../screen/pages/childpage/ChildPage';

const AppScreens = StackNavigator({
  HomePage: { screen: HomePage },
  ChildPage: { screen: ChildPage },
}, {
  mode: 'float',
  // transitionConfig: Platform.OS === 'android' ? () => ({
  //   screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  // }) : null,
});

export default AppScreens;
