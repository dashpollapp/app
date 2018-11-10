import { createStackNavigator } from "react-navigation";
import { SignIn, SignUp } from "../container/Login";
import * as screenName from "../constants/screenNames";

export default createStackNavigator(
    {
        [screenName.SIGN_IN]: SignIn,
        [screenName.SIGN_UP]: SignUp
    },
    {
        headerMode: "none",
        initialRouteName: screenName.SIGN_IN
    }
);
