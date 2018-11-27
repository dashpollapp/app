import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import {
    SettingsOverview,
    AccountSettings,
    EditProfile,
    Help,
    Legal,
    MyData,
    Performance,
    ReportProblem,
    Security
} from "../container/Settings";

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

    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1}}>
                <NavbarTopBack title="Optionen" navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} screenProps={{ rootNavigation: this.props.navigation }} />
            </View>
        )
    }
}

SettingsNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
