'use strict'
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const DOMAIN = 'http://52.69.97.120' //server test
export const CUSTOMER_DOMAIN = 'http://acvdev.com:9811' //server test

export default {
    Debug: true,
    DOMAIN,
    drawerWidth: 263,
    color:{
        headerColor:'#6F2121'
    },
    fontSize:{
        s16: 16,
        s10: 10
    },
    Window: {
        width: width,
        height: height,
    }
}