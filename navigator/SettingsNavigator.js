import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

import { SettingsOverview, AccountSettings, EditProfile, Help, Legal, MyData, Performance, ReportProblem, Security } from "../container/Settings";

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
            <View style={{ flex: 1, alignItems: "flex-start", backgroundColor:"#fff", flexDirection:"row"}}>

                <LinearGradient
                        colors={['#af4667', '#3486cc']}
                        start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                        style={{ height: "100%", width: 8, alignItems: 'center', justifyContent: 'center'}}
                        >
                </LinearGradient>
                <View style={{ flex: 1}}>
                    <NavbarTopBack title="Optionen" navigation={this.props.navigation} />
                    <Navigator screenProps={{ rootNavigation: this.props.navigation }} />
                </View>
            </View>
        )
    }
}

SettingsNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
