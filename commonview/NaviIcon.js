/**
 * @Author: will
 * @Date:   2017-06-15T09:59:20+08:00
 * @Filename: NaviIcon.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-30T16:08:38+08:00
 */


import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default class NaviIcon extends PureComponent {
  static propTypes = {
    onPress: React.PropTypes.func,
    image: React.PropTypes.any,
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <Image
          resizeMode="contain"
          style={styles.button}
          source={this.props.image}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 25,
    width: 25,
  },
});
