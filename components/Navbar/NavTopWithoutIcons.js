import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import screenNames from "../../constants/screenNames";
import PropTypes from "prop-types";
import nt from "./NavbarTopStyle";

import logoImg from "../../assets/img/navbar/top/logo.png";
import optionsImg from "../../assets/img/navbar/top/options.png";
import pbImg from "../../assets/img/pb.jpg";

export default class NavTopWithoutIcons extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={nt.box}>
                    <TouchableOpacity onPress={() => (navigation) ? this.props.navigation.push(screenNames.SEARCH) : null} style={nt.mainItem}>
                        <Image style={nt.mainItemLogoImg} source={logoImg} />
                    </TouchableOpacity>
                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

NavTopWithoutIcons.propTypes = {
    navigation: PropTypes.object,
}