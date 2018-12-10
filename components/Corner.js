import React from "react";
import { View, Image, StyleSheet, Platform, Dimensions } from "react-native";
import cornerImg from "../assets/img/corner.png";

export default function (props) {
    return (
        <View style={[css.cornerBox]}  >
            <Image style={[css.cornerBL, css.corner]} source={cornerImg} />
            <Image style={[css.cornerBR, css.corner]} source={cornerImg} />
            <Image style={[css.cornerTL, css.corner]} source={cornerImg} />
            <Image style={[css.cornerTR, css.corner]} source={cornerImg} />
        </View>
    );
}

const css = StyleSheet.create({
    cornerBox: {
        zIndex: 10000,
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    corner: {
        position: "absolute",
        zIndex: 4000,
        height: 5,
        width: 5,
        /* Nur bei IOS */
        opacity: Platform.OS === "ios" ? 1 : 0
    },
    cornerTL: {
        top: 0,
        left: 0
    },
    cornerTR: {
        top: 0,
        right: 0,
        transform: [{ rotate: "90deg" }]
    },
    cornerBL: {
        bottom: 0,
        left: 0,
        transform: [{ rotate: "-90deg" }]
    },
    cornerBR: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: "180deg" }]
    }
});
