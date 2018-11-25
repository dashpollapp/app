import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import * as screenNames from "../../constants/screenNames";
import PropTypes from 'prop-types';
import nt from "./NavbarTopStyle";

import logoImg from "../../assets/img/navbar/top/logo.png";
import optionsImg from "../../assets/img/navbar/top/options.png";
import pbImg from "../../assets/img/pb.jpg";

export default class NavTopWithoutIcons extends Component {
    render() {
        return (
            <View>
                <View style={nt.box}>
                    <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.SEARCH)} style={nt.mainItem}>
                        <Image style={nt.mainItemLogoImg} source={logoImg} />
                    </TouchableOpacity>
                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

NavTopWithoutIcons.propTypes = {
    navigation: PropTypes.object.isRequired,
}