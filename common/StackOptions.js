/**
 * @Author: will
 * @Date:   2017-05-26T17:25:24+08:00
 * @Filename: StackOptions.js
 * @Last modified by:   will
 * @Last modified time: 2017-07-11T19:28:11+08:00
 */


 import React from 'react';
 import appColor from '../common/appColor';
 import NaviIcon from '../commonview/NaviIcon';

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
   headerLeft: (<NaviIcon
     image={require('../../resource/image/demo/icon_back.png')}
     onPress={() => { navigation.goBack(null); }}
   />),
 });
 export default StackOptions;
