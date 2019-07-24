import {StyleSheet} from 'react-native'
import {Constants, Device} from "../../src/common";

const menu = StyleSheet.create({
    headerMenu: {
        width: '100%',
        height: 45,
        backgroundColor: '#2A2A2A',
        borderWidth: 1,
        borderColor: '#707070',
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 16
    },
    login: {
        height: 107,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconAvatar:{
        width: 58,
        height: 60,
    },
    loginText:{
        fontSize:Constants.fontSize.s16,
        marginTop:10
    }

});

export default menu