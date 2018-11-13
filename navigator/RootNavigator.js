import { createStackNavigator } from "react-navigation";

import HomeNavigator from "./HomeNavigator";
import * as screenName from "../constants/screenNames";
import SettingsNavigator from "./SettingsNavigator";
import UserNavigatorWrapper from "../container/User/UserNavigatorWrapper";
import CreatePollNavigator from "./CreatePollNavigator"

export default createStackNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        [screenName.USER]: UserNavigatorWrapper,
        [screenName.CREATE]: CreatePollNavigator,
        [screenName.SETTINGS]: SettingsNavigator
    },
    {
        initialRouteName: screenName.HOME,
        headerMode: "none"
    }
);


