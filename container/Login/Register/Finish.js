import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Image } from "react-native";

import {reg} from "./Style"
import D from "../../../assets/style/default"

import KiImg from "../../../assets/img/ki.png"

import * as screenNames from '../../../constants/screenNames';

class Finish extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" enabled style={reg.box}>

                <Text style={reg.subTitle}>bei Dashpoll</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_FINISH)} >  
                    <Text style={reg.nextText}>Überspringen</Text>
                </TouchableOpacity>

        </KeyboardAvoidingView>
        );
    }
}

export default Finish;
