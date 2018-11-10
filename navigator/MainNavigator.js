import { createStackNavigator } from "react-navigation";
import Settings from "./container/Settings";
import Create from "./container/Create";
import Polls from "./container/Polls";
import * as screenName from "../constants/screenNames";

export default createStackNavigator(
    {
        [screenName.POLLS]: Polls,
        [screenName.SETTINGS]: Settings,
        [screenName.CREATE]: Create
    },
    {
        headerMode: "none",
        initialRouteName: "Polls"
    }
);
