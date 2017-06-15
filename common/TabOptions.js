/**
 * @Author: will
 * @Date:   2017-06-15T15:12:13+08:00
 * @Filename: TabOptions.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T15:20:45+08:00
 */


 import {
   Image,
 } from 'react-native';
 import React from 'react';
 import appColor from '../common/appColor';
 import BackIcon from '../commonview/BackIcon';

 const TabOptions = (navigation, normalImage, selectedImage, tabBarTitle, navTitle) => ({
   headerBackTitle: null,
   tabBarLabel: tabBarTitle,
   headerTitle: navTitle,
   headerTitleStyle: {
     color: '#fff',
     textAlign: 'center',
     alignSelf: 'center',
     fontSize: 18,
   },
   headerStyle: {
     backgroundColor: appColor.naviBar,
   },
   headerLeft: null,
   tabBarIcon: ({ focused }) => (
     focused ?
       <Image
         source={selectedImage}
         resizeMode="contain"
         style={{ height: 26, width: 26 }}
       />
     :
       <Image
         source={normalImage}
         resizeMode="contain"
         style={{ height: 26, width: 26 }}
       />
   ),
 });
 export default TabOptions;
