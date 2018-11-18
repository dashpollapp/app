import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import * as screenNames from "../../constants/screenNames";
import PropTypes from 'prop-types';
import nt from "./NavbarTopStyle";

import backImg from "../../assets/img/navbar/top/back.png";

export default class NavbarTopBack extends Component {

    render() {
        return (
            <View>
                <View style={nt.box}>
                    <TouchableOpacity style={nt.titleBox}>
                       {/* <Image style={nt.imgBack} source={backImg} />*/}
                        <Text style={nt.title}>{this.props.title}</Text>
                    </TouchableOpacity>
                

                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

NavbarTopBack.propTypes = {
    navigation: PropTypes.object.isRequired,
}