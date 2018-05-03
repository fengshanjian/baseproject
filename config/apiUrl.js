/**
 * @Author: will
 * @Date:   2017-05-26T13:59:00+08:00
 * @Filename: apiUrl.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-05-02T14:16:39+08:00
 */


import appConfig from './appConfig';

const baseUrl = appConfig.baseUrl();// 开发环境外网地址

const apiUrl = {
  login: baseUrl + '/broad/app/login',
  logout: baseUrl + '/broad/app/logout',
};
export default apiUrl;
