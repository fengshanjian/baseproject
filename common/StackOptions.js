/**
 * @Author: will
 * @Date:   2017-05-26T17:25:24+08:00
 * @Filename: StackOptions.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-30T16:09:33+08:00
 */


 import React from 'react';
 import appColor from '../common/appColor';
 import NaviIcon from '../commonview/NaviIcon';

 const StackOptions = navigation => ({
   headerBackTitle: null,
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
