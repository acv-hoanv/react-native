import React, {Component} from "react";
import {View, TouchableOpacity,Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import {Constants} from "../common";
import Color from "../../assets/Color";

export const Button = ({onPress, width, height, style = {}, text, textStyle = {}, ...props}) => (
    <TouchableOpacity
        style={[thisStyle.container(width, height), style]}
        onPress={onPress}
        {...props}
    >
        <Text style={[thisStyle.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
);

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
};

const thisStyle = StyleSheet.create({
    container(width, height) {
        let style = {
            width: 165,
            backgroundColor: Color.color525263,
            height: 36,
            alignItems:'center',
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
        };

        if (width) {
            style.width = width
        }

        if (height) {
            style.height = height
        }

        return style
    },
    text: {
        color: Color.white,
        fontSize: Constants.fontSize.s16
    }
});

export default Button;
