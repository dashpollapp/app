import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Provider } from "react-redux";

import RootApp from "./RootApp";
import store from "./utils/store";

export default class App extends React.Component {
    render() {
        console.log("START1");
        return (
            <Provider store={store}>
                {/*<View style={styles.containerWraper}>
                    <NavbarTop />
                    <View style={styles.container}>
                        {/* Inhalt nach hier (sonst wird er von der Navbar abgeschnitten) */}
                {/*<Temp />
                    </View>
                    <NavbarBottom />
        <Corner />*/}
                <RootApp />

            </Provider >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50 + 18,
        marginBottom: 50,
        height: Dimensions.get("window").height
    },
    containerWraper: {
        flex: 1
    }
});
