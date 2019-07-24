import {StyleSheet} from 'react-native'
import {Constants, Device} from "../../src/common";
import Color from "../Color";

const header = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        position: 'relative',
        paddingLeft: 7,
        paddingRight: 7,
        flexDirection: 'row',
        width: Device.width,
        height: 44,//Device.headerHeight,
        backgroundColor: Color.headerColor,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Device.toolbarHeight
    },
    headerLeft: {
        flex: 1,
        justifyContent: 'center'
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textHeader: {
        color: '#fff',
        fontSize: Constants.fontSize.s16
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIcon: {
        width: 30,
        height: 18
    },
    iconSearch:{
        marginRight:20
    }
});

export default header