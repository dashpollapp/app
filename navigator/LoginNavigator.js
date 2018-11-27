import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Container
import { SignIn, SignUp } from "../container/Login";

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
