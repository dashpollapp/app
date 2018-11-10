import { createSwitchNavigator } from "react-navigation";
import HomeNavigator from "./HomeNavigator";
import * as screenName from "../constants/screenNames";
import React from "react";
import { View, Text } from "react-native";
import SettingsNavigator from "./SettingsNavigator";

export default createSwitchNavigator(
    {
        [screenName.HOME]: HomeNavigator,
        "Settings": SettingsNavigator
    },
    {
        initialRouteName: screenName.HOME
    }
);


