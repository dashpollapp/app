import { createSwitchNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import HomeNavigator from "./HomeNavigator";
import AppLoading from "./AppLoading";
import * as screenName from "../constants/screenNames";

export default createSwitchNavigator(
    {
        [screenName.MAIN]: MainNavigator,
        [screenName.LOGIN]: LoginNavigator,
        [screenName.APP_LOADING]: AppLoading
    },
    {
        initialRouteName: screenName.APP_LOADING
    }
);
