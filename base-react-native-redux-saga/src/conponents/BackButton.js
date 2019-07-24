import React, {Component} from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "./Icon";
import PropTypes from "prop-types";

export const BackButton = ({goBack}) => (
    <TouchableOpacity
        onPress={goBack}
    >
        <View style={thisStyle.headerLeftWrapper}>
            <Icon
                name="iconBack"
                height={20}
                width={20}
                paddingRight={10}
                marginLeft={5}
                fill="#FFF"
            />
        </View>
    </TouchableOpacity>
);

BackButton.propTypes = {
    goBack: PropTypes.func.isRequired,
};

const thisStyle = StyleSheet.create({
    headerLeftWrapper: {
        width:'100%',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export default BackButton;
