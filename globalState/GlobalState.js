/**
 * @Author: will
 * @Date:   2017-05-26T11:40:24+08:00
 * @Filename: GlobalState.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T14:33:01+08:00
 */


 import { observable, action } from 'mobx';

 class GlobalState {
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
 const globalState = new GlobalState();

 export default globalState;
