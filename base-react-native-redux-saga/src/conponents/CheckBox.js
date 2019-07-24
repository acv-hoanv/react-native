import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'
import Color from "../../assets/Color";
import Header from "./Header";
import {Constants, I18n} from "../common";
import PropTypes from 'prop-types'

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        checked: false,
        textStyle: {},
        containerStyle: {},
        checkBoxStyle: {},
        activeOpacity: 1,
        onPress: () => {
        },

    };

    onCheck = () => {
        this.props.onPress()
    };

    render() {
        return (
            <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.onCheck}
            >
                <View style={[styles.container, this.props.containerStyle]}>
                    <TouchableOpacity
                        activeOpacity={this.props.activeOpacity}
                        style={[styles.wrapper(this.props.size), this.props.checkBoxStyle]}
                        onPress={this.onCheck}
                    >
                        {this.props.checked ?
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/iconCheck.png')}
                            /> : null}
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

CheckBox.propType = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    size: PropTypes.number,
    textStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    checkBoxStyle: PropTypes.object,
    activeOpacity: PropTypes.number
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapper(size) {
        let style = {
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
            borderWidth: 1,
            marginRight: 6,
            backgroundColor: Color.white,
            borderColor: '#A0A0A0'
        };

        if (size) {
            style.width = size
            style.height = size
        }

        return style
    },
    icon: {
        width: '100%',
        height: '100%',
        tintColor: '#2E8FC1'
    },
    text: {
        fontSize: Constants.fontSize.s16,
        color: Color.colorBlack
    }
});

CheckBox.propType = {}