/**
 * @Author: smartrabbit
 * @Date:   2018-04-18T17:28:23+08:00
 * @Filename: NavigationService.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-20T14:59:38+08:00
 */

import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(NavigationActions.navigate({
    type: NavigationActions.NAVIGATE,
    routeName,
    params,
  }));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};
