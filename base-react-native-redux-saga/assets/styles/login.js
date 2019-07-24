import {StyleSheet} from 'react-native'
import Color from "../Color";
import {Constants} from "../../src/common";

const login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    wrapper: {
        flex: 1,
        margin: 11,
        paddingLeft: 15,
        paddingTop: 20,
        paddingRight: 15,
        backgroundColor: Color.colorGray
    },
    passWorld: {
        marginTop: 20
    },
    checkBox: {
        marginLeft: 8,
        marginTop: 10
    },
    loginButton: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center'
    },
    forgotContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    forgotText: {
        textDecorationLine: 'underline',
        fontSize: Constants.fontSize.s16,
        color: Color.colorBlue2C8FE3
    },
    newMemberContainer: {}
});

export default login