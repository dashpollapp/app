import { createStackNavigator } from "react-navigation";
import { screenNames } from "../constants";

//Container
import Profile from "../container/Profile/Profile";

export default createStackNavigator(
    {
        [screenNames.PROFILE]: Profile,
    },
    {
        headerMode: "none",
        initialRouteName: screenNames.PROFILE
    }
);
