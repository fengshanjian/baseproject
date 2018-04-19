/**
 * @Author: will
 * @Date:   2017-05-26T17:25:24+08:00
 * @Filename: StackOptions.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T14:49:21+08:00
 */


import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import appColor from '../common/appColor';


const StackOptions = navigation => ({
  headerBackTitle: null,
  gesturesEnabled: true,
  headerTitleStyle: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
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
});
export default StackOptions;
