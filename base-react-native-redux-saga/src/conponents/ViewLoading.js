import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

export default class ViewLoading extends Component {
    render() {
        return (
            <View style={{
                position: "absolute",
                zIndex: 1,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <ActivityIndicator size="large" color="#14589a"/>
            </View>
        );
    }
}


