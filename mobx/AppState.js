/**
 * @Author: will
 * @Date:   2017-05-26T11:40:24+08:00
 * @Filename: AppState.js
 * @Last modified by:   will
 * @Last modified time: 2017-07-05T10:03:05+08:00
 */


 import { observable, action } from 'mobx';

 class AppState {
   @observable
   login = false;
   @observable
   barStyle = 'light-content';
   @action
   updateLogin = (isLogin) => {
     this.login = isLogin;
     if (isLogin) {
       this.barStyle = 'light-content';
     } else {
       this.barStyle = 'default';
     }
   }
 }
 const appState = new AppState();

 export default appState;
