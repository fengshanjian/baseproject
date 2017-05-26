/**
 * @Date:   2017-03-24T10:04:20+08:00
 * @Last modified time: 2017-03-30T16:36:58+08:00
 */


 /**
  * Created by tdzl2003 on 12/18/16.
  */
 /* eslint-disable react/forbid-prop-types */

 import React, { PropTypes, Component } from 'react';
 import {
   StyleSheet,
   TouchableOpacity,
   Text,
 } from 'react-native';
 import { observer } from 'mobx-react/native';
 import appFont from '../../../common/appFont';
 import { WINDOW_WIDTH, WINDOW_HEIGHT, widthSacle, heightScale } from '../../../common/windowUtil';


 const styles = StyleSheet.create({
   button: {
     marginTop: 100 * heightScale,
     height: 150 * heightScale,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#D8DEE1',
     borderRadius: 10,
   },
   active: {
     backgroundColor: '#00b9ff',
   },
 });

 @observer
 export default class Submit extends Component {
   static propTypes = {
     children: PropTypes.string.isRequired,
     form: PropTypes.object,
     onSubmit: PropTypes.func,
   };
   static contextTypes = {
     form: PropTypes.object,
   };
   render() {
     const { children, onSubmit } = this.props;
     const form = this.context.form || this.props.form;
     return (
       <TouchableOpacity
         style={[styles.button, form.isValid && styles.active]}
         disabled={!form.isValid}
         onPress={onSubmit}
       >
         <Text style={appFont.whiteText}>{children}</Text>
       </TouchableOpacity>
     );
   }
 }
