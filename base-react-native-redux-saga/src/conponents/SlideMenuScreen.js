import React, {Component} from 'react'
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'
import {menu, Styles} from "../../assets/styles";
import Separator from "./Separator";
import ViewPropTypes from "./ViewPropTypes";
import PropTypes from 'prop-types'
import {I18n} from "../common";

export default class SlideMenuScreen extends Component {
    constructor(props) {
        super(props)
    }

    closeMenu = () => {
        this.props.navigation.closeDrawer();
    }

    login = () => {
        this.props.navigation.navigate('login');
    }

    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <View style={menu.headerMenu}>
                    <TouchableOpacity
                        onPress={this.closeMenu}
                    >
                        <Image
                            style={menu.icon}
                            source={require('../../assets/icons/icon_close.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={menu.login}>
                    <TouchableOpacity
                        onPress={this.login}
                    >
                        <Image
                            style={menu.iconAvatar}
                            source={require('../../assets/icons/icon_avatar.png')}/>
                        <Text style={menu.loginText}>ログイン</Text>
                    </TouchableOpacity>
                </View>
                <MenuItem
                    text={I18n.t('About This Site')}
                    onPress={() => {
                    }}
                />

                <MenuItem
                    text={I18n.t('privacy policy')}
                    onPress={() => {
                    }}
                />

                <MenuItem
                    text={I18n.t('Notation based on the Specified Commercial Transactions Law')}
                    onPress={() => {
                    }}
                />

                <MenuItem
                    text={I18n.t('Contact Us')}
                    onPress={() => {
                    }}
                />

                <MenuItem
                    text={I18n.t('NEWS')}
                    onPress={() => {
                    }}
                    activeOpacity={1}
                />

            </SafeAreaView>
        )
    }
}

const MenuItem = ({style = {}, containerStyle, text, onPress, ...propss}) => {
    return (
        <View style={[{width: '100%', height: 50}, containerStyle]}>
            <Separator/>
            <TouchableOpacity
                {...propss}
                style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}
                onPress={onPress}
            >
                <Text style={{marginLeft: 23}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
};

MenuItem.propTypes = {
    style: ViewPropTypes.style,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};