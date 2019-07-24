import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import {header} from "../../assets/styles";
import PropTypes from 'prop-types'
import {I18n} from "../common";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        openMenu: () => {
        },
        openSearch: () => {
        },
        openMyCard: () => {
        },
        titleName: I18n.t('Home')
    };

    render() {
        return (
            <View style={header.header}>
                <View style={header.headerLeft}>
                    <TouchableOpacity
                        style={header.headerIcon}
                        onPress={this.props.openMenu()}
                    >
                        <Image source={require('../../assets/icons/menu_icon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={header.headerCenter}>
                    <Text style={header.textHeader}>{this.props.titleName}</Text>
                </View>
                <View style={header.headerRight}>
                    <TouchableOpacity
                        style={[header.headerIcon, header.iconSearch]}
                        onPress={this.props.openSearch()}
                    >
                        <Image source={require('../../assets/icons/icon_search.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={header.headerIcon}
                        onPress={this.props.openMyCard()}
                    >
                        <Image source={require('../../assets/icons/ic_mycart.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

Header.propType = {
    openMenu: PropTypes.func.isRequired,
    openSearch: PropTypes.func.isRequired,
    openMyCard: PropTypes.func.isRequired,
    titleName: PropTypes.string,
    navigation: PropTypes.object,
}