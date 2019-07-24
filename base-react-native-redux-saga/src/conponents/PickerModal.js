import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Text,
    Modal,
    StyleSheet
} from 'react-native'
import Picker from 'react-native-wheel-picker'
import PropTypes from "prop-types";

var PickerItem = Picker.Item;
import {Constants} from "../common";

export default class PickerModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    openModal = () => {
        this.setState({isVisible: true})
    };

    onCloseModal = () => {
        this.setState({isVisible: false})
        this.props.onClose()
    };

    onClosePicker = () => {
        this.onCloseModal()
        this.props.onClose(true)
    };

    onDone = () => {
        this.onCloseModal()
        this.props.onDone(true)
    };

    render() {
        let {onValueChange, selectedValue, itemStyle, containerPickerStyle, wrapperPicker, pickerStyle, headerStyle, containerStyle, headerLeftStyle, headerRightStyle} = this.props;
        return (
            <Modal
                animationType="slide"
                onRequestClose={() => {
                }}
                transparent={true}
                visible={this.state.isVisible}
            >
                <SafeAreaView style={[styles.container, containerStyle]}>
                    <View style={[styles.header, headerStyle]}>
                        <TouchableOpacity
                            style={[styles.headerIconLeft, headerLeftStyle]}
                            onPress={this.onClosePicker}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/icon_close.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.headerIconRight, headerRightStyle]}
                            onPress={this.onDone}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../assets/icons/icon_check.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containerFlastList, containerPickerStyle]}>
                        <View style={[styles.wrapperVertical, wrapperPicker]}>
                            <Picker
                                {...this.props}
                                style={[styles.containerPicker, pickerStyle]}
                                selectedValue={selectedValue}
                                itemStyle={[styles.itemSelected, itemStyle]}
                                onValueChange={onValueChange}
                            >
                                {this.props.children}
                            </Picker>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }

    static defaultProps = {
        onValueChange: () => {
        },
        onDone: () => {
        },
        onClose: () => {
        },
        selectedValue: 0,
        itemStyle: {},
        containerPickerStyle: {},
        wrapperPicker: {},
        headerStyle: {},
        containerStyle: {},
        headerLeftStyle: {},
        headerRightStyle: {},
        pickerStyle: {}
    }
}

PickerModal.propType = {
    children: PropTypes.node.isRequired,
    onValueChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.any.isRequired,
    onDone: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    itemStyle: PropTypes.object.isRequired,
    containerPickerStyle: PropTypes.object.isRequired,
    wrapperPicker: PropTypes.object.isRequired,
    headerStyle: PropTypes.object.isRequired,
    containerStyle: PropTypes.object.isRequired,
    headerLeftStyle: PropTypes.object.isRequired,
    headerRightStyle: PropTypes.object.isRequired,
    pickerStyle: PropTypes.object.isRequired
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    containerFlastList: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        height: 50,
        position: 'relative',
        backgroundColor: '#6F2121'
    },
    headerIconLeft: {
        position: 'absolute',
        width: 20,
        height: 20,
        left: 10
    },
    headerIconRight: {
        position: 'absolute',
        right: 10,
        width: 20,
        height: 20,
    },
    icon: {
        width: '100%',
        height: '100%',
        tintColor: '#ffff'
    },
    wrapperVertical: {
        width: '100%',
        height: 140,
        backgroundColor: '#FFF',
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        color: "black"
    },
    containerPicker: {
        width: '100%',
        height: '100%'
    },
    itemSelected: {
        color: "black",
        fontSize: 16
    }
});

//PickerModal.propType = {}