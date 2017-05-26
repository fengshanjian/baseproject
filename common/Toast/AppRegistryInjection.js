/**
* @Author: will
* @Date:   2016-11-16T02:13:26+08:00
* @Filename: AppRegistryInjection.js
* @Last modified by:   will
 * @Last modified time: 2017-05-23T16:08:57+08:00
* @flow weak
*/


import { StyleSheet, View, AppRegistry } from 'react-native';
import React, { Component } from 'react';
import StaticContainer from 'react-native/Libraries/Components/StaticContainer.react';
import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

const emitter = new EventEmitter();

// inject modals into app entry component
const originRegister = AppRegistry.registerComponent;

AppRegistry.registerComponent = (appKey, getAppComponent) => {
  const siblings = new Map();
  const updates = new Set();

  return originRegister(appKey, () => {
    const OriginAppComponent = getAppComponent();

    return class extends Component {
      static displayName = `Root(${appKey})`;
      _update;
      componentWillMount() {
        this._update = this._update.bind(this);
        emitter.addListener('siblings.update', this._update);
      }

      componentWillUnmount() {
        emitter.removeListener('siblings.update', this._update);
      }

      _update(id, element, callback) {
        if (siblings.has(id) && !element) {
          siblings.delete(id);
        } else {
          siblings.set(id, element);
        }
        updates.add(id);
        this.forceUpdate(callback);
      }

      render() {
        const elements = [];
        siblings.forEach((element, id) => {
          elements.push(
            <StaticContainer
              key={`root-sibling-${id}`}
              shouldUpdate={updates.has(id)}
            >
              {element}
            </StaticContainer>
                    );
        });
        updates.clear();

        return (
          <View style={styles.container}>
            <StaticContainer shouldUpdate={false}>
              <OriginAppComponent {...this.props} />
            </StaticContainer>
            {elements}
          </View>
        );
      }
        };
  });
};

export default emitter;
