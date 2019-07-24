import React, { Component } from 'react'
import SvgIcon from 'react-native-svg-icon'
import { Image } from '../common'

const svgs = Image.icons

const Icon = (props) => <SvgIcon {...props} svgs={svgs}/>

export default Icon

