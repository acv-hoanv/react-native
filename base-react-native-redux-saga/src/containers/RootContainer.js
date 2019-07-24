import MyDrawerNavigator from "../navigations/DrawerNavigator";
import React, {Component} from 'react'
import {View} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export class RootContainer extends React.Component {
    componentDidMount(){
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MyDrawerNavigator/>
            </View>
        )
    }
}