import React, {Component} from "react";
import {View, StyleSheet, TextInput} from "react-native";
import PropTypes from "prop-types";
import Color from "../../assets/Color";
import Label from "./Label";

export const InputWithLabel = ({containerStyle = {}, style = {}, textStyle, labelText, textRequired = false, ...props}) => {
    return (
        <View style={[thisStyle.container, containerStyle]}>
            <Label
                textStyle={textStyle}
                text={labelText}
                required={textRequired}
            />
            <TextInput
                style={[thisStyle.input, style]}
                {...props}
            />
        </View>
    )
};

InputWithLabel.propTypes = {
    style: PropTypes.object,
    textStyle: PropTypes.object,
    labelText: PropTypes.string.isRequired,
    required: PropTypes.bool
};

const thisStyle = StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    input: {
        borderColor: Color.colorBlue2C8FE3,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft:5,
        backgroundColor:Color.white,
        height: 44,
        marginTop:8,
        width: '100%'
    }
});

export default InputWithLabel;
