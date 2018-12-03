import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import {reg} from "./Style"

import * as screenNames from '../../../constants/screenNames';

class Permissions extends React.Component {
    render() {
        return (
            <View style={reg.box}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_NAMESELECTION)} >
                    <Text style={reg.subTitle}>Gleich geht's los</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

export default Permissions;
