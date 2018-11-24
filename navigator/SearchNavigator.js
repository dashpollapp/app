import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Search from '../container/Search/SearchPage';
import * as screenName from "../constants/screenNames";
import NavbarTopBack from "../components/Navbar/NavbarTopBack";
import PropTypes from "prop-types";

const Navigator = createStackNavigator(
    {
        [screenName.SEARCH]: Search
    },
    {
        headerMode: "none",
        initialRouteName: screenName.SEARCH
    }
);

export default class SearchNavigator extends React.Component {

    static router = Navigator.router;
    
    render() {
        return (
            <View style={{ flex: 1}}>
                <NavbarTopBack title="Search" navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }
}

SearchNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

