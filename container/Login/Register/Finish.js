import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import {reg} from "./Style"

import * as screenNames from '../../../constants/screenNames';
class Finish extends React.Component {
    render() {
        return (
            <View style={reg.box}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_NAMESELECTION)} >
                    <Text style={reg.subTitle}>bei Dashpoll</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Finish;
