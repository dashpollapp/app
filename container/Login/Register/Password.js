import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import {reg} from "./Style"

import * as screenNames from '../../../constants/screenNames';
class Password extends React.Component {
    render() {
        return (
            <View style={reg.box}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_FINISH)} >
                    <Text style={reg.subTitle}>Sicherheit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Password;
