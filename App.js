import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Provider } from "react-redux";

import RootApp from "./RootApp";
import store from "./utils/store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
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
