import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

import Develope from "../temp/Develope";

export default createStackNavigator(
    {
        [screenName.DEVELOPER]: Develope,
    },
    {
        headerMode: "none",
        initialRouteName: screenName.DEVELOPER
    }
);