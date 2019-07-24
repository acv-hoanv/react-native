import React, {Component} from 'react'
import {
    View, Modal,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    StyleSheet, Image
} from 'react-native'
import PropTypes from 'prop-types'
import {Calendar} from 'react-native-calendars';
import Tools from "../common/Tools";
import {Constants} from "../common";

export default class CalandarPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            daySelected: '',
            markDate: {}
        }
    }

    openCalandarPicker() {
        this.setState({
            modalVisible: true,
        })
    }

    onCloseModal(day) {
        this.setState({
            modalVisible: false,
            daySelected: Tools.dateFormatParam(day.dateString, 'YYYY/MM/DD')
        })

        this.props.onValueChange(day)
    }

    clearSelectedDay() {
        this.setState({
            daySelected: ''
        })
    }

    render() {
        return (
            <View>
                <View style={thisStyle.ddInput}>
                    <TouchableOpacity
                        style={thisStyle.input}
                        onPress={() => {
                            this.openCalandarPicker()
                        }}
                    >
                        <Text style={[{color: 'black'}, this.props.textstyle]}>{this.state.daySelected}</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    }}
                >
                    <View style={thisStyle.container}>
                        <View style={thisStyle.box}>
                            <View style={thisStyle.header}>
                                <TouchableHighlight
                                    underlayColor={'transparent'}
                                    style={thisStyle.headerButton}
                                    onPress={() => {
                                        this.setState({modalVisible: false})
                                    }}
                                >
                                    <Image
                                        style={thisStyle.icon}
                                        source={require('../../assets/icons/icon_close.png')}
                                    />
                                </TouchableHighlight>
                            </View>

                            <Calendar
                                // Initially visible month. Default = Date()
                                current={this.props.currenDay}
                                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                minDate={this.props.minDate}
                                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                maxDate={this.props.maxDate}
                                // Handler which gets executed on day press. Default = undefined
                                onDayPress={(day) => {
                                    this.onCloseModal(day)
                                }}
                                // Handler which gets executed on day long press. Default = undefined
                                onDayLongPress={(day) => {
                                }}
                                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                monthFormat={'yyyy年 MM月'}
                                // Handler which gets executed when visible month changes in calendar. Default = undefined
                                onMonthChange={(month) => {
                                    console.log('month changed', month)
                                }}
                                markedDates={{
                                    [this.props.currenDay]: {
                                        selected: this._isEmpty(this.props.currenDay) ? false : true,
                                        disableTouchEvent: false
                                    }
                                }}

                                style={{flex: 1}}
                                theme={{
                                    selectedDayTextColor: 'white',
                                    // monthTextColor: 'white',
                                    selectedDayBackgroundColor: '#009a3e',
                                    arrowColor: '#009a3e',
                                    textMonthFontSize: 16,
                                    textMonthFontWeight: 'bold',
                                    'stylesheet.calendar.main': {
                                        week: {
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }
                                    },
                                    'stylesheet.calendar.header': {
                                        header: {
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            height: 40,
                                            justifyContent: 'space-between'
                                        },
                                        week: {
                                            marginTop: 5,
                                            marginBottom: 5,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        },
                                        dayHeader: {
                                            marginTop: 0,
                                            paddingTop: 10,
                                            flex: 1,
                                            height: 40,
                                            textAlign: 'center',
                                            fontSize: 14,
                                            color: 'black',
                                            fontWeight: 'bold',
                                            borderWidth: 0.5,
                                            borderColor: '#ddd'
                                        },
                                        arrow: {
                                            // marginLeft: 10,
                                            justifyContent: 'center',
                                            // marginRight: 10,
                                            height: 20,
                                            tintColor: '#009a3e',
                                            width: 20,
                                            alignItems: 'center',
                                            backgroundColor: '#fff',
                                            borderRadius: 20 / 2,

                                        },
                                        monthText: {
                                            color: '#009a3e',
                                            fontWeight: 'bold',
                                            fontSize: 16
                                        }
                                    }
                                }}
                                // Hide month navigation arrows. Default = false
                                hideArrows={false}
                                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                                // Do not show days of other months in month page. Default = false
                                hideExtraDays={true}
                                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                                // day from another month that is visible in calendar page. Default = false
                                disableMonthChange={false}
                                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                                firstDay={1}
                                // Hide day names. Default = false
                                hideDayNames={false}
                                // Show week numbers to the left. Default = false
                                showWeekNumbers={false}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                                onPressArrowLeft={substractMonth => substractMonth()}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                                onPressArrowRight={addMonth => addMonth()}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    static defaultProps = {
        minDate: '',
        maxDate: '',
        currenDay: '',
        textstyle: {},
        onValueChange: () => {
        }
    }

    onSetDaySelected(date) {
        this.setState({
            daySelected: date
        })
    }

    _isEmpty(src) {
        if (src == undefined || src == null || src == '' || src.length == 0) {
            return true
        } else {
            return false
        }
    }
}

CalandarPicker.propType = {
    minDate: PropTypes.string,
    currenDay: PropTypes.string,
    maxDate: PropTypes.string,
    onValueChange: PropTypes.func,
    textstyle: PropTypes.object
}

const widthModal = Constants.Window.width * 90 / 100
const maxHeightModal = Constants.Window.height * 90 / 100
const thisStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        //fontFamily: Constants.fontFamily,
    },
    box: {
        height: 350,
        paddingTop: 5,
        paddingBottom: 5,
        width: widthModal,
        maxHeight: maxHeightModal,
        backgroundColor: '#009a3e' //Constants.color.workMainColor,
    },
    input: {
        width: 100,
        height: 35,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        paddingLeft: 20,
    },
    headerText: {
        color: '#555',
        fontWeight: 'bold',
        lineHeight: 22,
    },
    headerButton: {
        position: 'absolute',
        right: 10,
        top: 0,
    },
    ddInput: {
        lineHeight: 22,
        marginBottom: 15,
    },
    icon: {
        width: 15,
        height: 15,
        tintColor: 'white'
    },
})
