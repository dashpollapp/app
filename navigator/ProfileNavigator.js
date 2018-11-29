import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Container
import Profile from "../container/Profile/Profile";

export default createStackNavigator(
    {
        [screenName.PROFILE]: Profile,
    },
    {
        headerMode: "none",
        initialRouteName: screenName.PROFILE
    }
);
