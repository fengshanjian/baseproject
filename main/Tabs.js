/**
 * @Author: will
 * @Date:   2017-05-31T09:02:47+08:00
 * @Filename: Tabs.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T15:25:11+08:00
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Image,
} from 'react-native';
import TabOptions from '../common/TabOptions';
import MainTab from '../tabs/MainTab';
import SecondTab from '../tabs/SecondTab';
import ChildPage from '../component/childpage/ChildPage';

const Tabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      navigationOptions: ({ navigation }) => {
        const normalImage = require('../../resource/image/demo/message_disable.png');
        const selectedImage = require('../../resource/image/demo/message.png');
        return TabOptions(navigation, normalImage, selectedImage, '消息', '消息');
      },
    },
    SecondTab: {
      screen: SecondTab,
      navigationOptions: ({ navigation }) => {
        const normalImage = require('../../resource/image/demo/contacts_diable.png');
        const selectedImage = require('../../resource/image/demo/contacts.png');
        return TabOptions(navigation, normalImage, selectedImage, '通讯录', '通讯录');
      },
    },
    /******不显示导航栏如下******/
    // SecondTab: {
    //   screen: SecondTab,
    //   navigationOptions: ({ navigation }) => {
    //     const normalImage = require('../../resource/image/demo/contacts_diable.png');
    //     const selectedImage = require('../../resource/image/demo/contacts.png');
    //     return {
    //       ...TabOptions(navigation, normalImage, selectedImage, '通讯录'),
    //       header: null,
    //     };
    //   },
    // },
  },
  {
    tabBarOptions: {
      showIcon: true, // android
      activeTintColor: '#1ab20a',
      inactiveTintColor: '#808080',
      indicatorStyle: { height: 0 }, // android
      style: {
        height: 49,
        backgroundColor: '#f1f1f1',
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
      },
      iconStyle: {
        width: 26,
        height: 26,
      }, // android
      labelStyle: {
        marginTop: 0,
        fontSize: 12,
      }, //android
    },
    tabBarPosition: 'bottom', // android
    swipeEnabled: false, // android
    animationEnabled: false, // android
    backBehavior: 'none',
  });

export default Tabs;
