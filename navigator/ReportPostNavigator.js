import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { screenNames } from "../constants";
import NavbarTopBack from "../components/Navbar/NavbarTopBack";
import Report from "../container/Polls/ReportPost";;

const Navigator = createStackNavigator(
    {
        [screenNames.POSTREPORT]: Report,
    },
    {
        headerMode: "none",
        initialRouteName: screenNames.POSTREPORT
    }
);

export default class ReportPostNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <NavbarTopBack navigation={this.props.navigation} title="Melden" />
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }

}