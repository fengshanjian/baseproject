/**
* @Author: will
* @Date:   2016-05-18T18:30:02+08:00
* @Filename: ToastContainer.js
* @Last modified by:   will
 * @Last modified time: 2017-05-03T15:13:54+08:00
* @flow weak
*/


import React, {
    Component,
    PropTypes,
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Easing,
} from 'react-native';


const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 400;
const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
const positions = {
  TOP: 20,
  BOTTOM: -20,
  CENTER: 0,
};

const durations = {
  LONG: 2500,
  SHORT: 1000,
};

const showType = {
  TOAST: 0,
  PROGRESS: 1,
};

const styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#000',
    opacity: 0.8,
    borderRadius: 5,
    marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2),
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

class ToastContainer extends Component {
  static displayName = 'ToastContainer';

  static propTypes = {
    ...View.propTypes,
    duration: PropTypes.number,
    visible: PropTypes.bool,
    position: PropTypes.number,
    animation: PropTypes.bool,
    shadow: PropTypes.bool,
    showType: PropTypes.number,
    backgroundColor: PropTypes.string,
    shadowColor: PropTypes.string,
    textColor: PropTypes.string,
    delay: PropTypes.number,
    hideOnPress: PropTypes.bool,
    onHide: PropTypes.func,
    onHidden: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    showType: showType.TOAST,
    duration: durations.SHORT,
    animation: true,
    shadow: true,
    position: positions.BOTTOM,
    delay: 0,
    hideOnPress: true,
  };

  state = {
    visible: this.props.visible,
    opacity: new Animated.Value(0),
  }


  componentDidMount = () => {
    if (this.state.visible) {
      this._showTimeout = setTimeout(() => this._show(), this.props.delay);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this._showTimeout = setTimeout(() => this._show(), this.props.delay);
      } else {
        this._hide();
      }

      this.setState({
        visible: nextProps.visible,
      });
    }
  };
  shouldComponentUpdate = (nextProps, nextState) => this.state.visible !== nextState.visible;

  componentWillUnmount = () => {
    this._hide();
  };


  _animating = false;
  _root = null;
  _hideTimeout = null;
  _showTimeout = null;

  _show = () => {
    clearTimeout(this._showTimeout);
    if (!this._animating) {
      clearTimeout(this._hideTimeout);
      this._animating = true;
      this._root.setNativeProps({
        pointerEvents: 'auto',
      });
      this.props.onShow && this.props.onShow(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: 0.8,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.out(Easing.ease),
      }).start(({ finished }) => {
        if (finished) {
          this._animating = !finished;
          this.props.onShown && this.props.onShown(this.props.siblingManager);
          if (this.props.duration > 0) {
            this._hideTimeout = setTimeout(() => this._hide(), this.props.duration);
          }
        }
      });
    }
  };

  _hide = () => {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    if (!this._animating) {
      this._root.setNativeProps({
        pointerEvents: 'none',
      });
      this.props.onHide && this.props.onHide(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.in(Easing.ease),
      }).start(({ finished }) => {
        if (finished) {
          this._animating = false;
          this.props.onHidden && this.props.onHidden(this.props.siblingManager);
        }
      });
    }
  };
  _renderContent() {
    if (this.props.showType === showType.TOAST || this.props.showType === undefined) {
      const { props } = this;
      return (
        <Text
          style={[
            styles.textStyle,
            props.textColor && { color: props.textColor },
          ]}
        >
          {this.props.children}
        </Text>
      );
    } else if (this.props.showType === showType.PROGRESS) {
      return (
        <View
          style={{ height: 44,
            justifyContent: 'center',
            alignItems: 'center' }}
        >
          <ActivityIndicator size={'large'} color={'white'} />
          <Text
            style={{
              marginTop: 15,
              fontSize: 16,
              color: 'white',
            }}
          >{this.props.children}</Text>
        </View>
      );
    }
    return null;
  }
  render() {
    const { props } = this;
    const offset = props.position;
    const position = offset ? {
      [offset < 0 ? 'bottom' : 'top']: Math.abs(offset),
    } : {
      top: 0,
      bottom: 0,
    };
    if (this.state.visible || this._animating) {
      return (
        <View
          style={[
            styles.defaultStyle,
            position,
          ]}
          pointerEvents="box-none"
        >
          <TouchableWithoutFeedback
            onPress={this.props.hideOnPress ? this._hide : null}
          >
            <Animated.View
              style={[
                styles.containerStyle,
                props.backgroundColor && { backgroundColor: props.backgroundColor },
                {
                  opacity: this.state.opacity,
                },
                props.shadow && styles.shadowStyle,
                props.shadowColor && { shadowColor: props.shadowColor },
              ]}
              pointerEvents="none"
              ref={(ele) => { this._root = ele; }}
            >
              {this._renderContent()}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      );
    }

    return null;
  }
}

export default ToastContainer;
export {
    positions,
    showType,
    durations,
};
