/**
 * @Author: will
 * @Date:   2017-05-25T20:06:10+08:00
 * @Filename: BaseComponent.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T17:15:57+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  BackHandler,
} from 'react-native';
import appColor from '../common/appColor';

export default class MyComponent extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  static navigationOptions = {
        // title 可以这样设置成一个函数， state 会自动传过来
    headerStyle: {
      backgroundColor: appColor.naviBar,
    },
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center',
      alignSelf: 'center',
    },
  };
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBack);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onAndroidBack);
    }
  }
  onAndroidBack() {
    this.onBack();
    return true;
  }
  onBack() {
    const { goBack, state } = this.props.navigation;
    goBack();
  }
}
