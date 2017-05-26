/**
* @Author: will
* @Date:   2016-11-16T02:13:26+08:00
* @Filename: SiblingsManager.js
* @Last modified by:   will
* @Last modified time: 2017-03-17T16:16:49+08:00
* @flow weak
*/


import { cloneElement } from 'react';
import { StyleSheet } from 'react-native';
import emitter from './AppRegistryInjection';

const styles = StyleSheet.create({
  offStream: {
    position: 'absolute',
  },
});
let uid = 0;

export default class {
  constructor(element, callback) {
    Object.defineProperty(this, '_id', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: uid++,
    });

    this.update(element, callback);
  }

  _offstreamElement(element) {
    return cloneElement(element, {
      style: [element.props.style, styles.offStream],
    });
  }

  _id = null;

  update(element, callback) {
    emitter.emit('siblings.update', this._id, this._offstreamElement(element), callback);
  }

  destroy(callback) {
    emitter.emit('siblings.update', this._id, null, callback);
  }
}
