/**
 * @Author: will
 * @Date:   2017-05-26T11:51:00+08:00
 * @Filename: UserManager.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T11:51:02+08:00
 */


 import { AsyncStorage } from 'react-native';

 let instance = null;

 export default class UserManager {
   constructor() {
     if (!instance) {
       instance = this;
     }
     return instance;
   }
   user = null;
   token = null;
   /** *
   * 类方法
   */
   static shareInstance() {
     const singleton = new UserManager();
     return singleton;
   }

   static async saveUser(info) {
     UserManager.shareInstance();
     await AsyncStorage.setItem('user', JSON.stringify(info));
     await UserManager.getUser();
   }


   static async getUser() {
     UserManager.shareInstance();
     if (instance.user === null) {
       const _userStr = await AsyncStorage.getItem('user');
       if (_userStr) {
         instance.user = JSON.parse(_userStr);
         instance.token = instance.user.token;
       }
     }
     return instance.user;
   }

   static async delUser() {
     UserManager.shareInstance();
     instance.user = null;
     instance.token = null;
     await AsyncStorage.removeItem('user');
   }

   static async getUserToken() {
     UserManager.shareInstance();
     if (instance.token === null) {
       await UserManager.getUser();
     }
     return instance.token;
   }

 }
