/**
 * @Author: will
 * @Date:   2017-05-25T11:32:33+08:00
 * @Filename: MainApp.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T19:27:35+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  StatusBar,
  NetInfo,
  Modal,
  Platform,
  InteractionManager,
  DeviceEventEmitter,
} from 'react-native';
import { observer } from 'mobx-react/native';
import SplashScreen from 'react-native-splash-screen';
import appConfig from '../config/appConfig';
import PushCenter from '../common/PushCenter';
import HomePage from '../component/homepage/HomePage';
import appState from '../mobx/AppState';
import LoginPage from '../component/loginpage/LoginPage';
import UserManager from '../common/UserManager';

@observer
export default class MainApp extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  componentWillMount() {
    SplashScreen.hide();
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
    SplashScreen.hide();
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
      appState.login = true;
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
    appState.login = false;
  }

  // 渲染具体内容
  _renderContent() {
    if (appState.login) {
      return (
        <HomePage navigation={this.props.navigation} />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={!appState.login}
          onRequestClose={() => { console.log(''); }}
        >
          <LoginPage />
        </Modal>
      </View>
    );
  }
  _renderStatusBar() {
    if (Platform.OS === 'ios') {
      return (
        <StatusBar
          translucent
          barStyle={appState.barStyle}
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
