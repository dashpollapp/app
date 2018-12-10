import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import screenName from "../constants/screenNames";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import PollStats from "../container/Polls/PostStats";


const Navigator = createStackNavigator(
    {
        [screenName.POLLSTATS]: PollStats
    },
    {
        headerMode: "none",
        initialRouteName: screenName.POLLSTATS
    }
);

export default class PollStatsNavigator extends React.Component {

    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavbarTopBack title="Statistiken" navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }
}

PollStatsNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

