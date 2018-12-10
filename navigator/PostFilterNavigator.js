import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import { screenNames } from "../constants";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import PollFilter from "../container/Polls/PostFilter";


const Navigator = createStackNavigator(
    {
        [screenNames.POSTFILTER]: PollFilter
    },
    {
        headerMode: "none",
        initialRouteName: screenNames.POSTFILTER
    }
);

export default class PostFilterNavigator extends React.Component {

    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavbarTopBack title="Beiträge Filtern" navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }
}

PostFilterNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

