/**
 * @Author: will
 * @Date:   2017-05-27T09:43:09+08:00
 * @Filename: LoginPage2.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-27T09:43:37+08:00
 */


 /**
 * @Author: will
 * @Date:   2017-03-26T13:18:07+08:00
 * @Filename: LoginPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-27T09:43:37+08:00
 * @flow weak
 */


  import React, { PropTypes, PureComponent } from 'react';

  import {
    View,
    StyleSheet,
    AsyncStorage,
    NativeModules,
    Text,
    Alert,
    Keyboard,
    StatusBar,
  } from 'react-native';
  import validate from 'mobx-form-validate';
  import { observable } from 'mobx';
  import { observer } from 'mobx-react/native';
  import { login } from '../../common/request';
  import { FormProvider, FormItem, Submit } from './form';
  import Toast from '../../common/Toast/Toast';
  import UserManager from '../../common/UserManager';
  import appColor from '../../common/appColor';
  import appFont from '../../common/appFont';
  import appState from '../../mobx/AppState';
  import appConfig from '../../config/appConfig';
  import {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    widthSacle,
    heightScale,
  } from '../../common/windowUtil';


  class LoginForm {
    // 用户名
    @observable
    @validate(/^.+$/, 'Please input a valid phone number.')
    mobile = '';

    // 密码
    @observable
    @validate(/^.+$/, 'Please input any password.')
    pwd = '';
    @observable
    loading = false;

 }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    form_container: {
      paddingLeft: 150 * widthSacle,
      paddingRight: 150 * widthSacle,
      marginTop: 150 * heightScale,
    },
  });

 @observer
  export default class LoginPage extends PureComponent {
    async componentDidMount() {
      if (global.pushToken === undefined) {
        global.pushToken = await AsyncStorage.getItem('push_token');
      }
      appState.barStyle = 'default';
    }

    form= new LoginForm();
    timer;

    submit = async () => {
      if (!this.form.mobile) {
        Toast.show('请输入用户名');
        return;
      }

      if (!this.form.pwd) {
        Toast.show('请输入密码');
        return;
      }

      Keyboard.dismiss();
      this.form.loading = true;
      this.timer = setTimeout(() => {
        if (appConfig.IS_TEST) {
          appState.updateLogin();
          Toast.show('登录成功');
        }
        this.form.loading = false;
      }, appConfig.REQUEST_TIME);
      if (appConfig.IS_TEST) {
        return;
      }
      login(this.form.mobile, this.form.pwd, global.pushToken, (response) => {
        console.log('登录返回：' + JSON.stringify(response));
        this.timer && clearTimeout(this.timer);
        // result为200表明登录成功
        if (response.recode === 200) {
          response.data.userInfo.token = response.data.sessionId;
          UserManager.saveUser(response.data.userInfo);
          appState.updateLogin();
          Toast.show('登录成功');
        } else {
          Toast.show(response.msg);
        }
      }, () => {
        this.timer && clearTimeout(this.timer);
      });
    }
    _renderStatusBar() {
      if (Platform.os === 'ios') {
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
        <FormProvider form={this.form}>
          <View style={styles.container}>
            {this._renderStatusBar}
            <Text style={[appFont.blueTilteText, { marginTop: 350 * heightScale, alignSelf: 'center' }]}>
              登录页面
            </Text>
            <View style={styles.form_container}>
              <FormItem
                name="mobile"
                placeholder={'请输入用户名'}
                icon={require('../../../resource/image/demo/phone.png')}
              />
              <FormItem
                secureTextEntry
                name="pwd"
                placeholder={'请输入密码'}
                icon={require('../../../resource/image/demo/mima.png')}
              />
              <Submit onSubmit={this.submit} >登录</Submit>
            </View>
          </View>
        </FormProvider>
      );
    }
  }