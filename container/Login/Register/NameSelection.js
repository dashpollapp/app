import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import * as screenNames from '../../../constants/screenNames';

class NameSelection extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_PASSWORD)} >
                    <Text> -> Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NameSelection;
