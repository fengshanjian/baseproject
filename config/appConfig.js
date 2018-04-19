/**
 * @Author: will
 * @Date:   2017-05-25T15:36:26+08:00
 * @Filename: appConfig.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-18T17:11:03+08:00
 */


// 服务器地址
const BASE_URL_DEV = 'https://218.205.115.237:38443';
const BASE_URL_RELEASE = 'https://218.205.115.237:28443';

// 附加启动页   设置为true则会在启动时加载启动页(除系统启动页之外的启动页)
const APP_SPLASH = true;
const SPLASH_TIME = 1;// 启动页时长(秒)
const REQUEST_TIME = 1000;

const baseUrl = () => {
  if (__DEV__) {
    return BASE_URL_DEV;
  }
  return BASE_URL_RELEASE;
};
const IS_TEST = true;
module.exports = {
  baseUrl,
  IS_TEST,
  REQUEST_TIME,
  APP_SPLASH,
  SPLASH_TIME,
};
