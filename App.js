import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import Corner from "./components/Corner";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.containerWraper}>
                <View style={styles.container}>
                    <NavbarTop />
                    <NavbarBottom />
                </View>
                <Corner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get('window').height,
    },
    containerWraper: {
        flex: 1,
    }
});
