import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import nb from "./NavbarBottomStyle";

import chatImg from "../../assets/img/navbar/bottom/chat_off.png";
import pollImg from "../../assets/img/navbar/bottom/poll.png";

class NavbarBottom extends Component {
    render() {
        return (
            <View style={nb.box}>
                <TouchableOpacity style={nb.mainItem}>
                    <Image style={nb.mainItemImg} source={chatImg} />
                </TouchableOpacity>
                <TouchableOpacity style={nb.mainItem}>
                    <Image style={nb.mainItemImg} source={pollImg} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default NavbarBottom;
