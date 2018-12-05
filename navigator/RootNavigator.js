import { createStackNavigator } from "react-navigation";
import * as screenName from "../constants/screenNames";

//Navigators
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import CreatePollNavigator from "./CreatePollNavigator"
import SettingsNavigator from "./SettingsNavigator";
import SearchNavigator from "./SearchNavigator";
import ProfileNavigator from "./ProfileNavigator";
import PostFilterNavigator from "./PostFilterNavigator";
import PollStatsNavigator from "./PollStatsNavigator";
import DelevoperNavigator from "./DelevoperNavigator";
import ReportPostNavigator from "./ReportPostNavigator"

export default createStackNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        [screenName.USER]: UserNavigator,
        [screenName.CREATE]: CreatePollNavigator,
        [screenName.SETTINGS]: SettingsNavigator,
        [screenName.SEARCH]: SearchNavigator,
        [screenName.PROFILE]: ProfileNavigator,
        [screenName.POLLSTATS]: PollStatsNavigator,
        [screenName.POSTFILTER]: PostFilterNavigator,
        [screenName.DEVELOPER]: DelevoperNavigator,
        [screenName.POSTREPORT]: ReportPostNavigator
    },
    {
        initialRouteName: screenName.HOME,
        headerMode: "none"
    }
);


