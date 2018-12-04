import React from "react";
import { Provider } from "react-redux";
import { Image, StyleSheet, View, Platform, StatusBar } from "react-native";

import corner from "./assets/img/corner.png";

import RootApp from "./RootApp";
import store from "./utils/store";
export default class App extends React.Component {
    render() {
        return (
            <View style={css.out}>
                <StatusBar
                    backgroundColor="#000"
                    barStyle={(Platform.OS === "ios") ? "dark-content" : "light-content"}
                />

                <View style={css.body}>
                    <Provider store={store}>
                        <RootApp />
                    </Provider >
                </View>
                <Image style={[css.cornerTL, css.corner]} source={corner} />
                <Image style={[css.cornerTR, css.corner]} source={corner} />
                <Image style={[css.cornerBL, css.corner]} source={corner} />
                <Image style={[css.cornerBR, css.corner]} source={corner} />
            </View>
        );
    }
}
export var css = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    out: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",

        paddingTop: Platform.OS === "ios" ? 22 : 24
    },


    corner: {
        opacity: Platform.OS === "ios" ? 1 : 0,
        position: "absolute",
        zIndex: 4000,
        height: 5,
        width: 5
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
    },

})