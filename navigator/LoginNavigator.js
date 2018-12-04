import React from "react";
import { View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

import SplashImg from "../assets/img/splash.png"

//Container
import { SelectUser, Password } from "../container/Login/Login";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.LOGIN_SELECT_USER]: SelectUser,
        [screenName.LOGIN_PASSWORD]: Password
    },
    {
        headerMode: "none",
        initialRouteName: screenName.LOGIN_SELECT_USER,
        tabBarComponent: null,
        swipeEnabled: false,
    }
);

export default class LoginNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Image style={{ width: 160, height: 60, alignSelf: "center", }} source={SplashImg}/>
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }

}


//berechtigungen -> Namen -> Password -> Fertig -> // Create oder Andere Leute
//                          |2Auth
//                          |Pin - TouchID - FaceID