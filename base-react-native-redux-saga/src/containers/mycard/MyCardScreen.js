import React, {Component} from 'react'
import {View, SafeAreaView, Text} from 'react-native'

export default class MyCardScreen extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text>MyCardScreen</Text>
                </View>
            </SafeAreaView>
        )
    }
}