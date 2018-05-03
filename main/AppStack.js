/**
 * @Author: will
 * @Date:   2017-05-25T11:34:03+08:00
 * @Filename: AppStack.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-03T11:21:02+08:00
 */

/* eslint-disable new-cap */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import appColor from '../common/appColor';
import HomePage from '../screen/pages/homepage/HomePage';
import AppTab from './AppTab';
import ChildPage from '../screen/pages/childpage/ChildPage';

const AppStack = StackNavigator({
  HomePage: { screen: HomePage },
  // AppTab: { screen: AppTab, navigationOptions: { headerLeft: null, headerRight: null } },
  ChildPage: { screen: ChildPage },
}, {
  mode: 'card',
  headerMode: 'float',
  headerTransitionPreset: 'uikit',
  navigationOptions: ({ navigation }) => ({
    headerBackTitle: null,
    gesturesEnabled: true,
    headerTitleStyle: Platform.os === 'ios' ? {
      color: '#fff',
    } : {
      color: '#fff',
      position: 'absolute',
      textAlign: 'center',
      left: 0,
      right: 0,
    },
    headerStyle: {
      backgroundColor: appColor.naviBar,
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => { navigation.goBack(null); }}
        style={{ marginLeft: 10, height: 25, width: 30 }}
      >
        <Icon
          name="chevron-thin-left"
          size={23}
          color="white"
        />
      </TouchableOpacity>
    ),
    headerRight: Platform.os === 'ios' ? null : <View />,
  }),
});

export default AppStack;
