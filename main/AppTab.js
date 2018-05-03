/**
 * @Author: will
 * @Date:   2017-05-31T09:02:47+08:00
 * @Filename: AppTab.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T10:51:57+08:00
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import TabOptions from '../common/TabOptions';
import MainTab from '../screen/tabs/MainTab';
import SecondTab from '../screen/tabs/SecondTab';

const AppTab = TabNavigator(
  {
    MainTab: { screen: MainTab },
    SecondTab: { screen: SecondTab },
  },
  {
    tabBarOptions: {
      showIcon: true, // android
      activeTintColor: '#1ab20a',
      inactiveTintColor: '#808080',
      indicatorStyle: { height: 0 }, // android
      style: Platform.OS === 'android' ? {
        height: 49,
        backgroundColor: '#f1f1f1',
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
      } : null,
      iconStyle: {
        marginTop: -5,
        width: 26,
        height: 26,
      }, // android
      labelStyle: {
        marginTop: 2,
        fontSize: 12,
      }, // android
    },
    tabBarPosition: 'bottom', // android
    swipeEnabled: false, // android
    animationEnabled: false, // android
    backBehavior: 'none',
  },
);

export default AppTab;
