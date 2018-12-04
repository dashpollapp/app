import React from "react";
import { View, Text, Image } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

import SplashImg from "../assets/img/splash.png"

//Container
import { Permissions, NameSelection, Password, Finish } from "../container/Login/Register";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.REGISTER_PERMISSIONS]: Permissions, //später :)
        [screenName.REGISTER_NAMESELECTION]: NameSelection,
        [screenName.REGISTER_PASSWORD]: Password,
        [screenName.REGISTER_FINISH]: Finish
    },
    {
        headerMode: "none",
        initialRouteName: screenName.REGISTER_NAMESELECTION,
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
                <View style={{ paddingHorizontal: 8, backgroundColor: "#fff", alignItems: "center", }}>
                    <Image style={{ width: 160, height: 60,  }} source={SplashImg}/>
                    <Text style={{ fontSize: 20, color: "#333", fontFamily: "GS2", textAlign: "center" }}>Wilkommen</Text>
                </View>
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }

}


//berechtigungen -> Namen -> Password -> Fertig -> // Create oder Andere Leute
//                          |2Auth
//                          |Pin - TouchID - FaceID