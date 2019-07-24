import {createStackNavigator} from "react-navigation";
import HomeScreen from "../containers/HomeScreen";
import LoginScreen from "../containers/login/LoginScreen";
import {View} from "react-native";
import React from "react";
import Color from "../../assets/Color";
import {Constants, I18n} from "../common";
import BackButton from "../conponents/BackButton";
import MyCardScreen from "../containers/mycard/MyCardScreen";
import ForgotScreen from "../containers/forgot/ForgotScreen";
import RegisterScreen from "../containers/register/RegisterScreen";

const StackNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        login: {
            screen: LoginScreen,
            navigationOptions: {
                headerTitle: I18n.t('Login')
            }
        },
        forgot: {
            screen: ForgotScreen,
            navigationOptions: {
                headerTitle: I18n.t('password reset')
            }
        },
        register: {
            screen: RegisterScreen,
            navigationOptions: {
                headerTitle: I18n.t('Customer Information')
            }
        },
        mycard: {
            screen: MyCardScreen,
        }
    }, {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            headerBackTitle: null,
            headerLeft: <BackButton goBack={() => {
                navigation.goBack()
            }}/>,
            headerTintColor: Color.white,
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                fontSize: Constants.fontSize.s16
            },
            headerStyle: {
                backgroundColor: Color.headerColor
            },
            headerRight: (<View style={{width: 36}}/>),
        })
    }
);

export default StackNavigator