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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.HOME)} >
                        <View style={nt.titleBox} >
                            <Image style={nt.backImg} source={backImg} />
                            <Text style={nt.title}>{this.props.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={nt.push}></View>
            </View>
        );
    }
}

NavbarTopBack.propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string
}