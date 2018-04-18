/**
 * @Author: will
 * @Date:   2017-08-07T20:28:14+08:00
 * @Filename: Tab.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T14:34:13+08:00
 */


 import React, { PureComponent } from 'react';
 import {
   View,
   Text,
   StyleSheet,
 } from 'react-native';
 import { observer } from 'mobx-react/native';
 import globalState from '../globalState/GlobalState';

 @observer
 export default class Tab extends PureComponent {
   static propTypes = {
     children: React.PropTypes.any,
   }
   render() {
     const { children } = this.props;
     return (
       <View style={styles.container}>
         {globalState.login && children ? children : null}
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
 });
