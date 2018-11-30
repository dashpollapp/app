import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import * as screenNames from '../../../constants/screenNames';

class Permissions extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_NAMESELECTION)} >
                    <Text> -> NameSelection</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Permissions;
