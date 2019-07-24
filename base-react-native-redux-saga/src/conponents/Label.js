import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import PropTypes from "prop-types";
import {Constants, I18n} from "../common";
import Color from "../../assets/Color";

export const Label = ({style = {}, textStyle = {}, text, required = false}) => {
    const requiredText = required ? <Text style={thisStyle.requiredText}>{I18n.t('have to')}</Text> : null;

    return (
        <View style={[thisStyle.container, style]}>
            <Text style={[thisStyle.text, textStyle]}>{text}</Text>
            {requiredText}
        </View>
    )
};

Label.propTypes = {
    style: PropTypes.object,
    textStyle: PropTypes.object,
    text: PropTypes.string.isRequired,
    required: PropTypes.bool
};

const thisStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    text: {
        color: Color.colorBlack,
        fontSize: Constants.fontSize.s16
    },
    requiredText: {
        color: Color.colorTextRequired,
        fontSize: Constants.fontSize.s10
    }
});

export default Label;
