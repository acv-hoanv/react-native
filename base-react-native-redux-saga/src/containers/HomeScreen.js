import React, {Component} from 'react'
import {View, SafeAreaView} from 'react-native'
import Header from "../conponents/Header";

export default class HomeScreen extends React.PureComponent {

    constructor(props) {
        super(props)

        this.openMenu = this.openMenu.bind(this)
        this.openSearch = this.openSearch.bind(this)
        this.openMyCard = this.openMyCard.bind(this)
    }

    openMenu() {
        this.props.navigation.openDrawer();
    }

    openSearch() {
    }

    openMyCard() {
        this.props.navigation.navigate('mycard');
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Header
                        openMenu={() => this.openMenu}
                        openSearch={() => this.openSearch}
                        openMyCard={() => this.openMyCard}
                    />
                </View>
            </SafeAreaView>
        )
    }

}