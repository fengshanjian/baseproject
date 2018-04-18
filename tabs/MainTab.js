/**
 * @Author: will
 * @Date:   2017-05-31T11:47:22+08:00
 * @Filename: MainTab.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T14:34:01+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  StatusBar,
  NetInfo,
  Modal,
  Platform,
  BackHandler,
  NativeModules,
  InteractionManager,
  DeviceEventEmitter,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';
import SplashScreen from 'react-native-splash-screen';
import appConfig from '../config/appConfig';
import PushCenter from '../common/PushCenter';
import HomePage from '../component/homepage/HomePage';
import globalState from '../globalState/GlobalState';
import UserManager from '../common/UserManager';
import StackOptions from '../common/StackOptions';
import LoginPage from '../component/loginpage/LoginPage';
import TabOptions from '../common/TabOptions';
import Tab from './Tab';

 @observer
export default class MainApp extends PureComponent {
   static propTypes = {
     navigation: React.PropTypes.any,
   }
   static navigationOptions = ({ navigation }) => {
     const normalImage = require('../../resource/image/demo/main_disable.png');
     const selectedImage = require('../../resource/image/demo/main.png');
     return {
       ...StackOptions(navigation),
       ...TabOptions(navigation, normalImage, selectedImage, '主页'),
       headerTitle: '主页',
       headerLeft: null,
     };
   }

   componentWillMount() {
     const self = this;
     NetInfo.isConnected.fetch().done((isConnected) => {
       console.log(`net isConnected:${isConnected}`);
       global.isConnected = isConnected;
     });
     NetInfo.isConnected.addEventListener(
       'change',
       self.handleNetInfoChange,
     );
     DeviceEventEmitter.addListener('tokenInvalid', this.tokenInvalid.bind(this));
   }
   async componentDidMount() {
     if (appConfig.APP_SPLASH) {
       this.timer = setTimeout(
         () => {
           SplashScreen.hide();
         },
         appConfig.SPLASH_TIME * 1000,
       );
     }

     const user = await UserManager.getUser();
     if (user) {
       globalState.updateLogin(true);
     } else {
       this.props.navigation.navigate('LoginPage');
     }
     console.log(global.pushToken);
   }
   componentWillUnmount() {
     const self = this;
     this.timer && clearTimeout(this.timer);
     NetInfo.removeEventListener(
       'change',
       self.handleNetInfoChange,
     );
     DeviceEventEmitter.removeAllListeners();
   }

   timer;

   handleNetInfoChange(isConnected) {
     global.isConnected = isConnected;
     console.log(`net isConnected:${isConnected}`);
   }
   /*
   * 处理token失效的问题
   */
   async tokenInvalid() {
     await UserManager.delUser();
     globalState.updateLogin(false);
   }

   // 渲染具体内容
   _renderContent() {
     return (
       <Tab>
         <HomePage navigation={this.props.navigation} />
       </Tab>
     );
   }
   _renderStatusBar() {
     if (Platform.OS === 'ios') {
       return (
         <StatusBar
           translucent
           barStyle={globalState.barStyle}
         />
       );
     }
     return null;
   }
   render() {
     return (
       <View style={{ flex: 1, backgroundColor: '#fff' }}>
         {this._renderStatusBar()}
         <PushCenter />
         {this._renderContent()}
       </View>
     );
   }
 }
