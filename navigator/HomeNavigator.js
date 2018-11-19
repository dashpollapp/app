import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import { View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";

import NavbarTop from "../components/Navbar/NavbarTop";
import Polls from "../container/Polls/Polls";
import { ChatOverview } from "../container/Chat";
import * as screenName from "../constants/screenNames";

import chatImg from "../assets/img/navbar/bottom/chat.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";


const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.CHAT]: {
            screen: ChatOverview,
            navigationOptions: {
                tabBarIcon: () => <Image style={{ height: 26, width: 26 }} source={chatImg} />
            }
        },
        [screenName.POLLS]: {
            screen: Polls,
            navigationOptions: {
                tabBarIcon: () => <Image style={{ height: 26, width: 26 }} source={pollImg} />
            }
        },

    },
    {
        headerMode: "none",
        initialRouteName: screenName.POLLS,
        tabBarPosition: "bottom",
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            iconStyle: {
                height: 26,
                width: 26
            },
            indicatorStyle: {
                marginTop: -4,
                height: 8,
                width: Dimensions.get('window').width / 2 - 145,
                marginLeft: 72,
                marginBottom: -4,
                backgroundColor: "#000",
                borderRadius: 4,
                position: "absolute",
            },
            style: {
                borderTopWidth: 4,
                borderColor: "#aaa",
                minHeight: 52,
                backgroundColor: "#fff",
            }
        }
    }
);

export default class HomeNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <NavbarTop navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} screenProps={{ parentNavigation: this.props.navigation }} />
            </View>
        )
    }

}

HomeNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
