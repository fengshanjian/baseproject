/**
 * @Author: will
 * @Date:   2017-06-15T09:59:20+08:00
 * @Filename: NaviIcon.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:19:10+08:00
 */


import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class NaviIcon extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.any,
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
