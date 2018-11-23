import { createStackNavigator } from "react-navigation";

import HomeNavigator from "./HomeNavigator";
import * as screenName from "../constants/screenNames";
import SettingsNavigator from "./SettingsNavigator";
import UserNavigator from './UserNavigator';
import SearchNavigator from './SearchNavigator';
import CreatePollNavigator from "./CreatePollNavigator"

//import UserNavigatorWrapper from "../container/User/UserNavigatorWrapper";

export default createStackNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        [screenName.USER]: UserNavigator,
        [screenName.CREATE]: CreatePollNavigator,
        [screenName.SETTINGS]: SettingsNavigator,
        [screenName.SEARCH]: SearchNavigator
    },
    {
        initialRouteName: screenName.HOME,
        headerMode: "none"
    }
);


