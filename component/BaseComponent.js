/**
 * @Author: will
 * @Date:   2017-05-25T20:06:10+08:00
 * @Filename: BaseComponent.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T20:08:21+08:00
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
import navigationOptions from '../common/navigationOptions';

export default class BaseComponent extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  static navOptions = navigationOptions;

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
    return this.onBack();
  }
  onBack() {
    const { goBack, state } = this.props.navigation;
    goBack();
    return true;
  }
}
