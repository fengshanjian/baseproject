/**
 * @Author: will
 * @Date:   2017-05-26T14:11:22+08:00
 * @Filename: windowUtil.js
 * @Last modified by:   will
 * @Last modified time: 2017-05-26T14:11:36+08:00
 */


 import {
     Dimensions,
 } from 'react-native';

 const WINDOW_WIDTH = Dimensions.get('window').width;
 const WINDOW_HEIGHT = Dimensions.get('window').height;
 const widthSacle = Dimensions.get('window').width / 1242;
 const heightScale = Dimensions.get('window').height / 2208;

 module.exports = {
   WINDOW_WIDTH,
   WINDOW_HEIGHT,
   widthSacle,
   heightScale,
 };
