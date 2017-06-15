/**
 * @Author: will
 * @Date:   2017-05-25T15:32:51+08:00
 * @Filename: PushCenter.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T15:43:48+08:00
 */


 import React from 'react';
 import { DeviceEventEmitter, AsyncStorage } from 'react-native';

 export default class PushCenter extends React.PureComponent {

   componentWillMount() {
     DeviceEventEmitter.addListener('PushToken', this.handleToken.bind(this));
     DeviceEventEmitter.addListener('PushBody', this.handlePushUserInfo.bind(this));
   }
   componentWillUnmount() {
     DeviceEventEmitter.removeAllListeners();
   }
   handlePushUserInfo(userInfo) {
     console.log('native推送' + JSON.stringify(userInfo));
     console.log(userInfo.aps.alert);
     // const _userInfo = JSON.parse(userInfo);
     // console.log(JSON.stringify(_userInfo));
     // TODO 处理推送消息
   }
   handleToken(token) {
     console.log('pushtoken:' + token);
     global.pushToken = token;
     AsyncStorage.setItem('push_token', token);
   }
   render() {
     return null;
   }
 }
