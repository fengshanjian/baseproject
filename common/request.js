/**
 * @Author: will
 * @Date:   2017-05-26T12:01:11+08:00
 * @Filename: request.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T14:32:20+08:00
 */


 import { AsyncStorage, Platform, Alert } from 'react-native';
 import apiUrl from '../config/appConfig';
 import UserManager from '../common/UserManager';
 import globalState from '../globalState/GlobalState';

 const NONET = 2500;
 const REQUNAUTHEDCODE = 1107;
 const REQTOKENINVALID = 1106;

 const userManager = UserManager.shareInstance();

 const httpHeader = {
   method: 'POST',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
 };
 function requestUrl(data) {
   if (data != null) {
     let url = '?';
     for (const key in data) {
       const andStr = url === '?' ? '' : '&';
       url = url + andStr + key + '=' + data[key];
     }
     return url;
   }
   return null;
 }


 function _fetch(url, fetchOptions) {
   if (!global.isConnected) {
     Alert.alert(
       '系统提示',
       '请连接网络',
       [
          { text: '确定', onPress: () => {} },
       ],
     );
     return new Promise((resolve, reject) => {
       resolve({ result: NONET });
     });
   }

   return new Promise((resolve, reject) => {
     console.log('request url:' + url);
     console.log('request body:' + JSON.stringify(fetchOptions));
     fetch(url, fetchOptions)
       .then((response) => {
         if (response.ok) {
           return response.json();
         }
         return reject('服务器繁忙，请稍后再试；\r\nCode:' + response.status);
       })
       .then((response) => {
         console.log('httpRespones:' + JSON.stringify(response));
         // token失效
         if (response.result === REQUNAUTHEDCODE || response.result === REQTOKENINVALID) {
           userManager.token = null;
           userManager.user = null;
           UserManager.delUser();
           globalState.updateLogin(false);
         }
         resolve(response);
       })
       .catch((err) => {
         console.log('httpRespones:' + JSON.stringify(err));
         reject(err);
       });
   });
 }
 /**
  * 登录
  * @param  {string}   userName
  * @param  {string}   password
  * @param  {string}   pushToken
  * @param  {Function} callback
  * @return {json}
  */
 export function login(userName: string, password: string,
   pushToken: string, callback, errorCallback) {
   let url = apiUrl.login;

   let deviceType = '3';// 默认android
   let pushType = '1';// 默认android

   if (Platform.OS === 'ios') {
     deviceType = '4';
     pushType = '2';
   }
   const body = {
     userName,
     password,
     deviceType,
     pushToken,
     pushType,
   };
   url += requestUrl(body);
   _fetch(url, httpHeader)
     .then((responseText) => {
       callback(responseText);
     })
     .catch((error) => {
       console.error(error);
       if (errorCallback) {
         errorCallback();
       }
     }).done();
 }

 /**
  * 退出登录
  * @param  {Function} callback
  */
 export function logout(callback) {
   let url = apiUrl.logout;
   const token = userManager.token;
   console.log('token' + userManager.token);
   const body = {
     token,
   };
   url += requestUrl(body);
   _fetch(url, httpHeader)
     .then((responseText) => {
       callback(responseText);
     })
     .catch((error) => {
       console.error(error);
     }).done();
 }
