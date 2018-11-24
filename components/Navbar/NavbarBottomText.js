import React, { Component } from "react";
import { View, TouchableOpacity, Image,Text } from "react-native";

import nb from "./NavbarBottomStyle";

import chatImg from "../../assets/img/navbar/bottom/chat_off.png";
import pollImg from "../../assets/img/navbar/bottom/poll.png";

class NavbarBottom extends Component {
    render() {
        return (
            <View style={nb.box}>
                <TouchableOpacity onPress={() => (this.props.onPress) ? this.props.onPress() : null} style={nb.mainItem}>
                    <Text style={nb.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NavbarBottom;
