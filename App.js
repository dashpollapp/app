import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import Corner from "./components/Corner";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> di</Text>
                <NavbarTop />
                <NavbarBottom />
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
        justifyContent: "center"
    }
});
