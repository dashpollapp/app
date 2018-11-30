import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Container
import { Permissions, NameSelection, Password, Finish } from "../container/Login/Register";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.REGISTER_PERMISSIONS]: Permissions,
        [screenName.REGISTER_NAMESELECTION]: NameSelection,
        [screenName.REGISTER_PASSWORD]: Password,
        [screenName.REGISTER_FINISH]: Finish
    },
    {
        headerMode: "none",
        initialRouteName: screenName.REGISTER_PERMISSIONS,
        tabBarComponent: null,
        swipeEnabled: false,
    }
);

export default class RegisterNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }

}


//berechtigungen -> Namen -> Password -> Fertig -> // Create oder Andere Leute
//                          |2Auth
//                          |Pin - TouchID - FaceID