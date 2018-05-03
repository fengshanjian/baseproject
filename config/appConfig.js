/**
 * @Author: will
 * @Date:   2017-05-25T15:36:26+08:00
 * @Filename: appConfig.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-02T14:46:05+08:00
 */

import { NativeModules } from 'react-native';
// 附加启动页   设置为true则会在启动时加载启动页(除系统启动页之外的启动页)
const APP_SPLASH = true;// 如果设置为false,请在原生代码中将相应的splash代码删除
const SPLASH_TIME = 1;// 启动页时长(秒)
const REQUEST_TIME = 1000;

const baseUrl = () => {
  NativeModules.CommonApi.getHost((httpHost) => {
    global.baseUrl = httpHost;
  });
};
const IS_TEST = true;
module.exports = {
  baseUrl,
  IS_TEST,
  REQUEST_TIME,
  APP_SPLASH,
  SPLASH_TIME,
};
