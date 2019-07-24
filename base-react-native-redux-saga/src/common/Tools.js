import truncate from 'lodash/truncate'
import {Constants, I18n} from './index'
import moment from 'moment'
import _ from 'lodash'
import Intl from 'intl'
import 'intl/locale-data/jsonp/ja-JP'
// import ImageResizer from 'react-native-image-resizer';

export default class Tools {
    static formatText(desc, limit) {
        if (typeof limit == 'undefined') {
            limit = 50
        }

        if (typeof desc == 'undefined') {
            return ''
        }

        var desc = truncate(desc, {'length': limit, 'separator': ' '})

        return desc
    }

    static log(data) {
        if (Constants.Debug) {
            console.log(data)
        }
    }

    static error(data) {
        if (Constants.Debug) {
            console.error(data)
        }
    }

    // static formatDate(datetime) {
    //     let format = 'YYYY' + I18n.t('Year') + 'MM' + I18n.t('Moon') + 'DD' +
    //         I18n.t('Day')
    //     return moment(datetime).format(format)
    // }
    //
    // static formatDateTime(datetime) {
    //     let format = 'YYYY' + I18n.t('Year') + 'MM' + I18n.t('Moon') + 'DD' +
    //         I18n.t('Day') + ' HH:mm'
    //     return moment(datetime).format(format)
    // }

    // static imageToBase64(filePath) {
    //     return RNFS.readFile(filePath, 'base64')
    // }

    // static async FileToBase64(file, resizeImageWidth) {
    //     const types = {
    //         image: ['jpg', 'jpeg', 'gif', 'png', 'bmp'],
    //         application: 'pdf'
    //     }
    //
    //     let extension = (file.fileName) ? _.lowerCase(file.fileName.split('.').pop()) : _.lowerCase(file.uri.split('.').pop()),
    //         fileBase64 = ''
    //
    //     if (file.type == undefined) {
    //         Object.keys(types).forEach(key => {
    //             if (types[key].includes(extension)) {
    //                 file.type = key + '/' + extension
    //             }
    //         })
    //     }
    //
    //     if (file.type == undefined && extension == 'heic') {
    //         file.type = 'image/jpeg'
    //         extension = 'jpeg'
    //     }
    //
    //     if (types.image.includes(extension) && file.width > 1024) { //TODO: only IOS
    //         let resizeImageWidth = resizeImageWidth || 600
    //         let width = resizeImageWidth, height = parseInt(file.height * resizeImageWidth / file.width)
    //         let pathFileResize = await ImageResizer.createResizedImage(file.uri, width, height, 'JPEG', 80, 0, RNFS.DocumentDirectoryPath)
    //         fileBase64 = await RNFS.readFile(pathFileResize.uri, 'base64')
    //         file.fileSize = pathFileResize.size
    //         file.width = width
    //         file.height = height
    //
    //         console.log('file resize:', file)
    //     } else {
    //         fileBase64 = await RNFS.readFile(file.uri, 'base64')
    //     }
    //
    //     return 'data:' + file.type + ';base64,' + fileBase64
    // }

    // static async resizeBase64ToNewBase64(base64, width = 600, height = 600) {
    //     let file = await ImageResizer.createResizedImage(base64, width, height, 'JPEG', 100)
    //     let newBase64 = await this.FileToBase64(file);
    //
    //     return newBase64
    // }

    static getTextByOption(dataArr, value) {

        let dataObj = _.find(dataArr, function (o) {
            return o.value == value
        }), response = ''

        if (dataObj) {
            response = dataObj.text
        }

        return response
    }

    static dateFormatParam(datetime, format = 'YYYY-MM-DD HH:mm') {
        if (moment(datetime).isValid()) {
            return moment(datetime).format(format)
        }
        return ''
    }

    static priceFormat(price) {
        let _price = Tools.isEmpty(price) ? 0 : Number(price)

        return new Intl.NumberFormat('ja-JP',
            {style: 'currency', currency: 'JPY'}).format(_price)
    }

    static numberFormat(number) {
        return new Intl.NumberFormat().format(number)
    }

    static numberFloatFormat(number, display = 2) {
        return Number.parseFloat(number).toFixed(display)
    }

    static caculatorDiffDay(currentDay, timeDayTwo) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(currentDay);
        var secondDate = new Date(timeDayTwo);

        var diffDays = (firstDate.getTime() - secondDate.getTime()) / (oneDay) //Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

        return diffDays;
    }




    static scrollToTop(element) {
        element.scrollTo({
            x: 0,
            y: 0,
            animated: true
        })
    }

    static getRemainingDays(ymd) {
        let now = moment().format('YYYY/MM/DD'), date = moment(ymd), diffDay = date.diff(moment(now), 'days')
        return String(diffDay)
    }

    static getTimeList(step = 30) {
        let mt = [], hhmm = ''
        for (let h = 0; h < 24; h++) {
            for (let i = 0; i < 60; i = i + step) {
                hhmm = h.toString().padStart(2, "0") + ':' + i.toString().padStart(2, "0")
                mt.push(hhmm)
            }
        }
        return mt
    }


    static convertToFullwidth(text) {
        var output = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] >= '!' && text[i] <= '~') { // Check whether character is latin
                output += String.fromCharCode(text.charCodeAt(i) - 0x20 + 0xff00); // Convert to fullwidth
            } else if (text[i] == " ") { // Check if character is space
                output += "　"; // Convert to fullwidth space
            } else {
                output += text[i]; // Leave it be
            }
        }
        return output
    }

    static isBase64Img(base64Str) {
        return /data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(base64Str)
    }

    static isEmpty(value) {
        if (value == undefined || value == null || value == '' || value.length == 0) {
            return true
        }

        return false
    }


    static checkDateInputIsValid(text) {
        let pattern = /^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/;
        return pattern.test(text)
    }

    static getCurrentDate() {
        const currentDate = moment().calendar('YYYY/MM/DD');

        return this.dateFormatParam(currentDate, 'YYYY/MM/DD')

    }

   static formatNumberIsNull(value){
        if (this.isEmpty(value)){
            return 0
        }

        return value
    }
}
