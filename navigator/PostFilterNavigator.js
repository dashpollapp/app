import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import * as screenName from "../constants/screenNames";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import PollFilter from "../container/Polls/PostFilter";


const Navigator = createStackNavigator(
    {
        [screenName.POSTFILTER]: PollFilter
    },
    {
        headerMode: "none",
        initialRouteName: screenName.POSTFILTER
    }
);

export default class PostFilterNavigator extends React.Component {

    static router = Navigator.router;
    
    render() {
        return (
            <View style={{ flex: 1}}>
                <NavbarTopBack title="Zurück" navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} />
            </View>
        )
    }
}

PostFilterNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

