/**
 * @Author: will
 * @Date:   2017-05-26T16:00:31+08:00
 * @Filename: Loader.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T16:21:17+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

export default class Loader extends PureComponent {
  static propTypes = {
    visible: React.PropTypes.bool,
  }
  render() {
    if (this.props.visible === false) {
      return null;
    }
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          backgroundColor: 'gray',
          justifyContent: 'center' }}
        opacity={0.5}
      >
        <Bubbles size={10} color="#fff" />
      </View>
    );
  }
}
