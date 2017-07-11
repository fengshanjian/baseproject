/**
 * @Author: will
 * @Date:   2017-05-31T11:48:18+08:00
 * @Filename: SecondPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-07-11T19:17:34+08:00
 */


 import React, { PureComponent } from 'react';
 import {
   View,
   Text,
   Image,
   Button,
   StyleSheet,
 } from 'react-native';
 import StackOptions from '../common/StackOptions';
 import TabOptions from '../common/TabOptions';

 export default class SecondPage extends PureComponent {
   static propTypes = {
     navigation: React.PropTypes.any,
   }
   static navigationOptions = ({ navigation }) => {
     const normalImage = require('../../resource/image/demo/contacts_diable.png');
     const selectedImage = require('../../resource/image/demo/contacts.png');
     return {
       ...StackOptions(navigation),
       ...TabOptions(navigation, normalImage, selectedImage, '通讯录'),
       headerTitle: '通讯录',
       headerLeft: null,
     };
   }

   render() {
     return (
       <View style={styles.container}>
         <Text>
           第二个Tab页面
         </Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#fff',
   },
 });
