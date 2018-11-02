import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import s from "./TempStyle";

class Temp extends Component {
    render() {
        return (
            <View style={s.box}>
               
               <Text style={s.h1}>Temp Datei für FE-Tests</Text>

            </View>
        );
    }
}

export default Temp;
