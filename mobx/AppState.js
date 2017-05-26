/**
 * @Author: will
 * @Date:   2017-05-26T11:40:24+08:00
 * @Filename: AppState.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T17:35:36+08:00
 */


 import { observable, action } from 'mobx';

 class AppState {
   @observable
   login = false;
   @observable
   barStyle = 'light-content';
   @action
   updateLogin = () => {
     this.login = true;
     this.barStyle = 'light-content';
   }
 }
 const appState = new AppState();

 export default appState;
