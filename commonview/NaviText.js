/**
 * @Author: will
 * @Date:   2017-07-04T14:43:47+08:00
 * @Filename: NaviText.js
 * @Last modified by:   will
 * @Last modified time: 2017-07-11T17:16:53+08:00
 */


 import React, { PureComponent } from 'react';
 import {
   TouchableOpacity,
   Text,
   StyleSheet,
 } from 'react-native';

 export default class NaviText extends PureComponent {
   static propTypes = {
     onPress: React.PropTypes.func,
     rightTitle: React.PropTypes.string,
     textStyle: React.PropTypes.any,
     style: React.PropTypes.any,
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
