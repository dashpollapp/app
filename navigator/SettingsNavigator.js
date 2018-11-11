import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { SettingsOverview, AccountSettings, EditProfile, Help, Legal, MyData, Performance, ReportProblem, Security } from "../container/Settings";
import PropTypes from "prop-types";

const Navigator = createStackNavigator(
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

export default class SettingsNavigator extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigator screenProps={{ rootNavigation: this.props.navigation }} />
            </View>
        )
    }
}

SettingsNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
