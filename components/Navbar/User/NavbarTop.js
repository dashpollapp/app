import React from "react";
import { css } from "../../../container/User/Style";
import { View, TouchableOpacity, Image, Text } from "react-native";

export default props => {
    const { navigation } = props;
    return (
        <View style={css.navTop}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image style={css.back} source={require("../../../assets/img/navbar/top/back.png")} />
            </TouchableOpacity>

            <View style={css.navTopCenter}>
                <Text style={css.windowTitle}>{navigation.state.params.user}</Text>
            </View>
            <Image style={css.myPB} source={require("../../../assets/img/koni.png")} />
        </View>)
}