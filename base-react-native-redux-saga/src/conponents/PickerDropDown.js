import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Text, Modal} from 'react-native'
import Button from "./Button";
import PickerModal from "./PickerModal";
import Picker from 'react-native-wheel-picker'
import PropTypes from "prop-types";


var PickerItem = Picker.Item;
export default class PickerDropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{label: '1', value: 12}, {label: '2', value: 13}, {label: '3', value: 14}, {
                label: '4',
                value: 54
            }, {label: '5', value: 143}],
            selectedValue: 0
        }

        this.onDone = this.onDone.bind(this)
    }

    onPicker = () => {
        this.refs.pickerModal.openModal()
    };

    onValueChange = (value) => {
        console.log('HOA ===>', value);
        this.setState({selectedValue: value})
    };

    onDone(done) {
    }

    render() {
        return (
            <View>
                <Button
                    // style={this.props.style}
                    // textStyle={this.props.textStyle}
                    text={'Drop Down'}
                    onPress={this.onPicker}
                />
                <PickerModal
                    ref={'pickerModal'}
                    selectedValue={this.state.selectedValue}
                    onValueChange={this.onValueChange}
                    onDone={this.onDone}
                >
                    {this.state.data.map((item, i) => (
                        <PickerItem label={item.label} value={item.value} key={"money" + item.value}/>
                    ))}
                </PickerModal>
            </View>
        )
    }
}

// PickerDropDown.propType = {
//     containerStyle: PropTypes.object.isRequired,
//     style: PropTypes.object.isRequired,
//     textStyle: PropTypes.object.isRequired,
//     data: PropTypes.array.isRequired,
//     onValueChange: PropTypes.func.isRequired
// }