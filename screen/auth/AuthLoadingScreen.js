/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T16:27:47+08:00
 * @Filename: AuthLoadingScreen.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:25:30+08:00
 */

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import UserManager from '../../common/UserManager';

export default class AuthLoadingScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
   _bootstrapAsync = async () => {
     const userToken = await UserManager.getUser();
     this.props.navigation.navigate(userToken ? 'MainApp' : 'Auth');
   };

   render() {
     return (
       <View style={{ flex: 1 }}>
         <ActivityIndicator />
         <StatusBar barStyle="default" />
       </View>
     );
   }
}
