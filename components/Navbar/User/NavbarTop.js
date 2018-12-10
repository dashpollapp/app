import React from "react";
import PropTypes from "prop-types";
import { css } from "../../../container/User/Style";
import { View, TouchableOpacity, Image, Text } from "react-native";

import BackImg from "../../../assets/img/navbar/top/back.png";
import KoniImg from "../../../assets/img/koni.png";

export default class UserNavbarTop extends React.Component {
    render() {
        return (
            <View style={css.navTop} >
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Image style={css.back} source={BackImg} />
                </TouchableOpacity>

                <View style={css.navTopCenter}>
                    <Text style={css.windowTitle}>{this.props.navigation.state.params.user}</Text>
                </View>
                <Image style={css.myPB} source={KoniImg} />
            </View>)
    }
}
UserNavbarTop.propTypes = {
    navigation: PropTypes.object.isRequired,
}