import { createStackNavigator } from "react-navigation";
import screenName from "../constants/screenNames";

import RegisterNavigator from "./RegisterNavigator";
import LoginNavigator from "./LoginNavigator";

import Home from "../container/Login/Home";

export default createStackNavigator(
    {
        [screenName.AUTH_HOME]: Home,
        [screenName.SIGN_IN]: LoginNavigator,
        [screenName.SIGN_UP]: RegisterNavigator
    },
    {
        headerMode: "none",
        initialRouteName: screenName.AUTH_HOME
    }
);

//berechtigungen -> Namen -> Password -> Fertig -> // Create oder Freune 
//                          |2Auth
//                          |Pin - TouchID - FaceID