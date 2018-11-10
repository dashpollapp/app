import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import * as screenNames from "../../constants/screenNames";

import nt from "./NavbarTopStyle";

import logoImg from "../../assets/img/navbar/top/logo.png";
import pbImg from "../../assets/img/pb.jpg";

class NavbarTop extends Component {
    render() {
        return (
            <View>
                <View style={nt.box}>
                    <TouchableOpacity style={nt.mainItem}>
                        <Image style={nt.mainItemLogoImg} source={logoImg} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")} style={nt.mainItem}>
                        <Image style={nt.mainItemPbImg} source={pbImg} />
                    </TouchableOpacity>

                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

export default NavbarTop;
