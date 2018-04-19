/**
 * @Author: will
 * @Date:   2017-05-31T09:02:47+08:00
 * @Filename: TabScreen.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T19:14:07+08:00
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import TabOptions from '../common/TabOptions';
import MainTab from '../screen/tabs/MainTab';
import SecondTab from '../screen/tabs/SecondTab';

const Tabs = TabNavigator(
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
        width: 26,
        height: 26,
      }, // android
      labelStyle: {
        marginTop: 0,
        fontSize: 12,
      }, // android
    },
    tabBarPosition: 'bottom', // android
    swipeEnabled: false, // android
    animationEnabled: false, // android
    backBehavior: 'none',
  },
);

export default Tabs;
