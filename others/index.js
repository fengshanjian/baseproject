/**
 * @Author: smartrabbit
 * @Date:   2018-04-16T17:11:48+08:00
 * @Filename: index.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-17T09:49:59+08:00
 */



import { AppRegistry } from 'react-native';
import RootApp from './src/main/RootApp';
import RootTab from './src/main/RootTab';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
