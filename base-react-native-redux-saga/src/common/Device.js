import { Dimensions, Platform } from 'react-native'

const {width, height, scale} = Dimensions.get('window')

const isIphoneX =
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)

const isIos = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'

export default {
    isIos,
    isAndroid,
    width,
    height,
    isIphoneX,
    toolbarHeight: isIos ? (isIphoneX ? 35 : 22): 0,
    headerHeight: isIos ? (isIphoneX ? 77 : 64): 42,
}