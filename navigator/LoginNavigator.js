import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Container
import SignIn from "../container/Login/SignIn";

import RegisterNavigator from './RegisterNavigator';

export default createStackNavigator(
    {
        [screenName.SIGN_IN]: SignIn,
        [screenName.SIGN_UP]: RegisterNavigator
    },
    {
        headerMode: "none",
        initialRouteName: screenName.SIGN_IN
    }
);

//berechtigungen -> Namen -> Password -> Fertig -> // Create oder Freune 
//                          |2Auth
//                          |Pin - TouchID - FaceID