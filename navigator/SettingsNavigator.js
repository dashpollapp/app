import React from "react";
import { createStackNavigator } from "react-navigation";
import { SettingsOverview, AccountSettings, EditProfile, Help, Legal, MyData, Performance, ReportProblem, Security } from "../container/Settings"


export default createStackNavigator(
    {
        SettingsOverview,
        AccountSettings,
        EditProfile,
        Help,
        Legal,
        MyData,
        Performance,
        ReportProblem,
        Security
    },
    {
        initialRouteName: "SettingsOverview",
        headerMode: "none"
    }
);
