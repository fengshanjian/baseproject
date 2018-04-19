/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T15:40:30+08:00
 * @Filename: Loader.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-19T10:30:53+08:00
 */

import { Toast, Theme } from 'teaset';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const LOADER_TIME_OUT = 30;
export default class Loader {
    static toastKey = null;
    static show(text) {
      if (Loader.toastKey) { return; }
      Loader.toastKey = Toast.show({
        text,
        icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor} />,
        position: 'center',
        duration: 1000000,
      });
    }
    static showWithTimeout(text) {
      Loader.show(text);
      setTimeout(() => {
        if (Loader.toastKey) {
          Loader.hide();
          Toast.message('请求超时');
        }
      }, LOADER_TIME_OUT * 1000);
    }
    static hide() {
      if (!Loader.toastKey) { return; }
      Toast.hide(Loader.toastKey);
      Loader.toastKey = null;
    }
}
