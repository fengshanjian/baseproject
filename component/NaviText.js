/**
 * @Author: will
 * @Date:   2017-07-04T14:43:47+08:00
 * @Filename: NaviText.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:19:31+08:00
 */


import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class NaviText extends PureComponent {
   static propTypes = {
     onPress: PropTypes.func,
     rightTitle: PropTypes.string,
     textStyle: PropTypes.any,
     style: PropTypes.any,
   }
   render() {
     return (
       <TouchableOpacity
         style={[styles.container, this.props.style]}
         onPress={this.props.onPress}
       >
         <Text style={[this.props.textStyle || null, { backgroundColor: 'transparent', fontSize: 16, color: '#fff' }]}>
           {this.props.rightTitle}
         </Text>
       </TouchableOpacity>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
