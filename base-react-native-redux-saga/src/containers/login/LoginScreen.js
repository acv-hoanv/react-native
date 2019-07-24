import React, {Component} from 'react'
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {login} from "../../../assets/styles";
import InputWithLabel from "../../conponents/InputWithLabel";
import {I18n} from "../../common";
import CheckBox from "../../conponents/CheckBox";
import Button from "../../conponents/Button";
import {loginData} from '../../state/login/Actions'
import _ from "lodash";
import PickerDropDown from "../../conponents/PickerDropDown";
import CalandarPicker from "../../conponents/CalandarPicker";

class LoginScreen extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isNextTime: false,
            email: '',
            passworld: '',
        }


        // create refs for email input
        this.refsEmailInput = React.createRef();
    }

    //static getDerivedStateFromProps(nextProps, prevState) {

        //return nextProps
        // @TODO update next props in here
        // const {loginData} = nextProps.loginResponse;
        //
        // if (nextProps.loginResponse !== null) {
        //     const loginError = _.get(loginResponse, 'loginData.error', null)
        //     const longIsFetching = _.get(loginResponse, 'loginData.isFetching', false)
        //     const loginData = _.get(loginResponse, 'loginData.data', [])
        //     console.log('HOA ==nextProps=>', 'vao day', nextProps)
        //     console.log('HOA =prevState==>', 'vao day', prevState)
        //
        //     return {loginResponse: nextProps.loginResponse}
        //
        // } else {
        //     return null
        // }
    //}

    onCheckNextTime = () => {
        this.setState({
            isNextTime: !this.state.isNextTime
        })
    }

    onLogin = () => {
        let {email, passworld} = this.state;

        this.refs.calandar.openCalandarPicker()
        //this.props.navigation.navigate('Home')
        let payload = {
            username: email,
            password: passworld,
            device_id: 'dasdasdasd'
        };

        //this.props.loginData(payload)
    }

    onForgotPass = () => {
        this.props.navigation.navigate('forgot')
    };

    onRegister = () => {
        this.props.navigation.navigate('register')
    };

    onValueChangeEmail = (email) => {
        this.setState({email})
    };

    onValueChangePassWorld = (passworld) => {
        this.setState({passworld})
    };

    render() {
        return (
            <SafeAreaView style={login.container}>
                <View style={login.wrapper}>
                    <InputWithLabel
                        ref={this.refsEmailInput}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        onChangeText={this.onValueChangeEmail}
                        labelText={I18n.t('mail address')}
                    />
                    <InputWithLabel
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        onChangeText={this.onValueChangePassWorld}
                        containerStyle={login.passWorld}
                        labelText={I18n.t('password')}
                    />
                    <CheckBox
                        containerStyle={login.checkBox}
                        onPress={this.onCheckNextTime}
                        title={I18n.t('Automatically login from next time')}
                        checked={this.state.isNextTime}
                    />
                    <View style={login.loginButton}>
                        <Button
                            text={I18n.t('Login')}
                            onPress={this.onLogin}
                        />
                    </View>

                    <View style={login.forgotContainer}>
                        <TouchableOpacity
                            onPress={this.onForgotPass}
                        >
                            <Text style={login.forgotText}>{I18n.t('forgotPass')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={login.forgotContainer}>
                        <TouchableOpacity
                            onPress={this.onRegister}
                        >
                            <Text style={login.forgotText}>{I18n.t('New member registration')}</Text>
                        </TouchableOpacity>
                    </View>
                    <PickerDropDown/>
                </View>
                <CalandarPicker
                    ref={'calandar'}
                />
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    loginResponse: state.loginData
})

const mapDispatchToProps = dispatch => ({
    loginData: (...args) => {
        dispatch(loginData(...args))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen)
