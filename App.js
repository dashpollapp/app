import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import NavbarTop from "./components/Navbar/NavbarTop";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import Corner from "./components/Corner";

//Erstellt zum FE entwicklen
import Temp from "./temp/Temp"

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.containerWraper}>
                <NavbarTop />
                <View style={styles.container}>
                    {/* Inhalt nach hier (sonst wird er von der Navbar abgeschnitten) */}
                    <Temp />
                </View>
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
        marginTop: 50 + 18,
        marginBottom: 50,
        height: Dimensions.get('window').height,
    },
    containerWraper: {
        flex: 1,
    }
});
