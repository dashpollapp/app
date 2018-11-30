import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Navigators
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import CreatePollNavigator from "./CreatePollNavigator"
import SettingsNavigator from "./SettingsNavigator";
import SearchNavigator from "./SearchNavigator";
import ProfileNavigator from "./ProfileNavigator";

import PollStatsNavigator from './PollStatsNavigator';

export default createStackNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        [screenName.USER]: UserNavigator,
        [screenName.CREATE]: CreatePollNavigator,
        [screenName.SETTINGS]: SettingsNavigator,
        [screenName.SEARCH]: SearchNavigator,
        [screenName.PROFILE]: ProfileNavigator,
        [screenName.POLLSTATS]: PollStatsNavigator,
    },
    {
        initialRouteName: screenName.HOME,
        headerMode: "none"
    }
);


