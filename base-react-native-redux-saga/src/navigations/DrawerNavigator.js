import React, {Component} from 'react'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import {Constants} from "../common";
import SlideMenuScreen from "../conponents/SlideMenuScreen";
import StackNavigator from "./StackNavigator";

const MyDrawerNavigator = createDrawerNavigator({
    StackNavigator: {
        screen: StackNavigator
    }
}, {
    contentComponent: props => <SlideMenuScreen {...props} />,
    drawerBackgroundColor: '#fff',
    drawerWidth: Constants.drawerWidth
});

export default createAppContainer(MyDrawerNavigator);