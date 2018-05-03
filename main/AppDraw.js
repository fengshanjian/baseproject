/**
 * @Author: smartrabbit
 * @Date:   2018-05-03T11:01:39+08:00
 * @Filename: AppDraw.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T11:46:04+08:00
 */

import { DrawerNavigator, DrawerItems } from 'react-navigation';
import React from 'react';
import { View, Button, Text } from 'react-native';

import AppStack from './AppStack';

const CustomDrawerContentComponent = props => (
  <View>
    <Button title="子页面" onPress={() => { props.navigation.navigate('ChildPage'); }} />
  </View>
);
const AppDraw = DrawerNavigator(
  {
    DrawHomePage: { screen: AppStack },
  },
  {
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#008AC9', // 选中文字颜色
      activeBackgroundColor: '#f5f5f5', // 选中背景颜色
      inactiveTintColor: '#000', // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: { // 样式

      },
    },
  },
);

export default AppDraw;
