/**
 * @Author: will
 * @Date:   2017-05-31T11:47:22+08:00
 * @Filename: MainTab.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T18:51:58+08:00
 */


import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import StackOptions from '../../common/StackOptions';
import TabOptions from '../../common/TabOptions';


 @observer
export default class MainApp extends PureComponent {
   static propTypes = {
     navigation: PropTypes.any,
   }
   static navigationOptions = ({ navigation }) => {
     const normalImage = require('../../resource/image/demo/main_disable.png');
     const selectedImage = require('../../resource/image/demo/main.png');
     return {
       ...StackOptions(navigation),
       ...TabOptions(navigation, normalImage, selectedImage, '主页'),
       headerTitle: '主页',
       headerLeft: null,
     };
   }


   render() {
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>
         <Text style={{ marginBottom: 20 }}>
           这是第一个Tab
         </Text>
         <Button
           onPress={() => navigate('ChildPage')}
           title="子页面"
         />
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
