import { createMaterialTopTabNavigator } from "react-navigation";
import Polls from "../temp/Temp";
import { ChatOverview } from "../container/Chat";
import * as screenName from "../constants/screenNames";
import React from "react";
import { View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import chatImg from "../assets/img/navbar/bottom/chat_off.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";

import NavbarTop from "../components/Navbar/NavbarTop";

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
                height: 12,
                width: Dimensions.get('window').width / 2 - 16,
                marginLeft: 8,
                backgroundColor: "#000",
                borderRadius: 2,
                position: "absolute",
                bottom: -8,
            },
            style: {
                shadowOpacity: 0.1,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
                shadowColor: '#111',
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderColor: "#ddd",
                elevation: 5,
                //flex: 1,
                //alignItems: "center"
            }
        }
    }
);

export default class HomeNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavbarTop navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} screenProps={{ parentNavigation: this.props.navigation }} />
            </View>
        )
    }

}

HomeNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
