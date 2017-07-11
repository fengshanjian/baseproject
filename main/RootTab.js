/**
 * @Author: will
 * @Date:   2017-06-15T14:40:46+08:00
 * @Filename: RootTab.js
 * @Last modified by:   will
 * @Last modified time: 2017-07-11T19:26:42+08:00
 */

 import {
   StackNavigator,
 } from 'react-navigation';
 import { Platform } from 'react-native';
 import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
 import MainApp from './Tabs';
 import ChildPage from '../component/childpage/ChildPage';
 import LoginPage from '../component/loginpage/LoginPage';

 const RootTab = StackNavigator({
   MainApp: { screen: MainApp },
   ChildPage: { screen: ChildPage },
   LoginPage: { screen: LoginPage },
 }, {
   headerMode: 'screen',
   transitionConfig: Platform.OS === 'android' ? () => ({
     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
   }) : null,
 },
);
 export default RootTab;
