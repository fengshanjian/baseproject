/**
 * @Author: fenghuijun
 * @Date:   2017-05-26T10:59:56+08:00
 * @Last modified by:   fenghuijun
 * @Last modified time: 2017-05-26T11:40:05+08:00
 */


import React, {
    Component,
} from 'react';
import { ToastAndroid } from 'react-native';

class Toast extends Component {
  static show = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  static hide =() => {

  }
}

export default Toast;
