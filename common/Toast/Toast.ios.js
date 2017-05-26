/**
* @Author: will
* @Date:   2016-05-18T18:30:02+08:00
* @Filename: Toast.js
 * @Last modified by:   fenghuijun
 * @Last modified time: 2017-05-26T11:22:16+08:00
* @providesModule Toast
* @flow weak
*/


import React, {
    Component,
} from 'react';
import RootSiblings from './SiblingsManager';
import ToastContainer, { positions, durations, showType } from './ToastContainer';

class Toast extends Component {
  static displayName = 'Toast';
  static propTypes = ToastContainer.propTypes;
  static positions = positions;
  static durations = durations;
  static showType = showType;

  static show = (
      message,
      options = {
        position: positions.CENTER,
        duration: durations.SHORT,
        shadow: true,
        animation: true,
        hideOnPress: true,
      }
    ) => new RootSiblings(<ToastContainer
      {...options}
      visible
    >
      {message}
    </ToastContainer>)
    /**
    let toast = Toast.show('This is a message', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});
    */


  static hide = (toast) => {
    if (toast instanceof RootSiblings) {
      toast.destroy();
    } else {
      console.warn(`Toast.hide expected a \`RootSiblings\`
        instance as argument.\nBut got \`${typeof toast}\` instead.`);
    }
  };


  componentWillMount = () => {
    this._toast = new RootSiblings(<ToastContainer
      {...this.props}
      duration={0}
    />);
  };

  componentWillReceiveProps = (nextProps) => {
    this._toast.update(<ToastContainer
      {...nextProps}
      duration={0}
    />);
  };

  componentWillUnmount = () => {
    this._toast.destroy();
  };
  _toast = null;
  render() {
    return null;
  }
}

export {
    RootSiblings as Manager,
};

export default Toast;
