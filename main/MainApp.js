/**
 * @Author: will
 * @Date:   2017-05-25T11:32:33+08:00
 * @Filename: MainApp.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-07T20:52:30+08:00
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
import appState from '../mobx/AppState';
import UserManager from '../common/UserManager';
import StackOptions from '../common/StackOptions';
import LoginPage from '../component/loginpage/LoginPage';
import Tab from '../tabs/Tab';

@observer
export default class MainApp extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  static navigationOptions = ({ navigation }) => ({
    ...StackOptions(navigation),
    headerTitle: '主页',
    headerLeft: null,
  })

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
      appState.updateLogin(true);
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
  onBack() {
    return false;
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
    appState.updateLogin(false);
    this.props.navigation.navigate('LoginPage');
  }

  // 渲染具体内容
  _renderContent() {
    return (
      <Tab>
        <HomePage navigation={this.props.navigation} />
      </Tab>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar
          translucent
          barStyle={appState.barStyle} // default,light-content
        />
        <PushCenter />
        {this._renderContent()}
      </View>
    );
  }
}
