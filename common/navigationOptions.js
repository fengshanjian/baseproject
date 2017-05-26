/**
 * @Author: will
 * @Date:   2017-05-26T17:25:24+08:00
 * @Filename: navigationOptions.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T19:51:44+08:00
 */

 import {
   StyleSheet,
 } from 'react-native';
 import appColor from '../common/appColor';

 const navigationOptions = {
   headerBackTitle: '返回',
   headerTitleStyle: {
     color: '#fff',
     textAlign: 'center',
     alignSelf: 'center',
     fontSize: 18,
   },
   headerStyle: {
     backgroundColor: appColor.naviBar,
   },
 };
 export default navigationOptions;
