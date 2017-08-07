/**
 * @Author: will
 * @Date:   2017-08-07T20:58:11+08:00
 * @Filename: SecondPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-07T20:59:04+08:00
 */


 import React, { PureComponent } from 'react';
 import {
   View,
   Text,
   StyleSheet,
 } from 'react-native';
 import StackOptions from '../../common/StackOptions';

 export default class SecondPage extends PureComponent {

   render() {
     return (
       <View style={styles.container}>
         <Text>第二个Tab页面</Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
