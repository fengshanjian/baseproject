/**
 * @Author: will
 * @Date:   2017-05-31T11:48:18+08:00
 * @Filename: SecondPage.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-07T21:00:01+08:00
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
 import Tab from './Tab';
 import SecondPage from '../component/secondpage/SecondPage';

 export default class SecondTab extends PureComponent {
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
       <Tab>
         <SecondPage />
       </Tab>
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
