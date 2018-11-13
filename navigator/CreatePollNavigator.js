import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import CreatePage from "../container/Create/CreatePage";
import PollTypes from "../container/Create/Types";
import * as screenName from "../constants/screenNames";
import NavbarTop from "../components/Navbar/Create/NavbarTop";
import { css } from "../container/User/Style";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.CREATEPOLL]: CreatePage,
        [screenName.POLLTYPES]: PollTypes
    },
    {
        headerMode: "none",
        initialRouteName: screenName.CREATEPOLL,
        swipeEnabled: true,
        tabBarComponent: () => null

    }
);


export default class CreatePollNavigator extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavbarTop navigation={this.props.navigation} />
                <Navigator />

            </View>
        )
    }
}

CreatePollNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
