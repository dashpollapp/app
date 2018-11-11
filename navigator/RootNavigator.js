import { createStackNavigator } from "react-navigation";
import HomeNavigator from "./HomeNavigator";
import * as screenName from "../constants/screenNames";
import React from "react";
import { View, Text } from "react-native";
import SettingsNavigator from "./SettingsNavigator";
import UserNavigatorWrapper from "../container/User/UserNavigatorWrapper";
import Create from "../container/Create/Create"

export default createStackNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        [screenName.USER]: UserNavigatorWrapper,
        [screenName.CREATE]: Create,
        [screenName.SETTINGS]: SettingsNavigator
    },
    {
        initialRouteName: screenName.HOME,
        headerMode: "none"
    }
);


