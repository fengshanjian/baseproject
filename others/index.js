/**
 * @Author: smartrabbit
 * @Date:   2018-04-16T17:11:48+08:00
 * @Filename: index.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T14:28:29+08:00
 */


import { AppRegistry } from 'react-native';
import App from './src/main/App';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

