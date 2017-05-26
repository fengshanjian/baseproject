/**
 * @Date:   2017-03-24T10:03:18+08:00
 * @Last modified time: 2017-03-30T17:05:55+08:00
 */

 /**
  * Created by tdzl2003 on 12/18/16.
  */
 /* eslint-disable react/forbid-prop-types */

 import React, { PropTypes, Component } from 'react';
 import {
   View,
   Text,
   TextInput,
   StyleSheet,
   Image,
 } from 'react-native';
 import { observer } from 'mobx-react/native';
 import camelCase from 'camelcase';
 import { WINDOW_WIDTH, WINDOW_HEIGHT, widthSacle, heightScale } from '../../../common/windowUtil';


 const styles = StyleSheet.create({
   container: {
     flexDirection: 'row',
     marginTop: 100 * heightScale,
     height: 120 * heightScale,
     borderWidth: 0.1,
     borderRadius: 10,
     alignItems: 'center',
   },
   image: {
     marginLeft: 40 * widthSacle,
     marginRight: 50 * widthSacle,
     width: 45 * widthSacle,
     height: 55 * heightScale,
   },
   input: {
     flex: 1,
     padding: 0,
   },
   error: {
     color: 'red',
   },
 });

 @observer
 export default class FormItem extends Component {
   static propTypes = {
     name: PropTypes.string.isRequired,
     form: PropTypes.object,
     autoFocus: PropTypes.boolean,
     icon: PropTypes.number,
     ...TextInput.propTypes,
   };
   static contextTypes = {
     form: PropTypes.object,
   };
   state = {
     focused: this.props.autoFocus,
   };
   onChangeText = (text) => {
     const { name } = this.props;
     const form = this.context.form || this.props.form;
     form[name] = text;
   };
   onFocus = () => {
     if (!this.state.focused) {
       this.setState({ focused: true });
     }
   };
   render() {
     const { name, form: _, icon, ...others } = this.props;
     const { focused } = this.state;
     const form = this.context.form || this.props.form;

     return (
       <View style={styles.container}>
         <Image
           style={styles.image}
           resizeMode="contain"
           source={icon}
         />
         <TextInput
           {...others}
           onFocus={this.onFocus}
           value={form[name]}
           onChangeText={this.onChangeText}
           style={styles.input}
           underlineColorAndroid="transparent"
         />
       </View>
     );
   }
 }
