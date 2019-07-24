import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPropTypes from './ViewPropTypes';

let styles = {};
const Separator = ({ style }) =>
	<View style={[styles.container, style && style]} />;

Separator.propTypes = {
	style: ViewPropTypes.style
};

styles = StyleSheet.create({
	container: {
		width:'100%',
		height: 1,
		backgroundColor:'#ECECEC',
	},
});

export default Separator;
