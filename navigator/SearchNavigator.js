import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import { screenNames } from "../constants";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import Search from "../container/Search/SearchPage";


const Navigator = createStackNavigator(
    {
        [screenNames.SEARCH]: Search
    },
    {
        headerMode: "none",
        initialRouteName: screenNames.SEARCH
    }
);

export default class SearchNavigator extends React.Component {

    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }
}

SearchNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

