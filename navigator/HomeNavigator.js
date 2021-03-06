import React from "react";
import { View, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { isIPhoneX } from "../utils/iphoneX"
import PropTypes from "prop-types";

import screenName from "../constants/screenNames";

//Components
import NavbarTop from "../components/Navbar/NavbarTop";

//Container
import Polls from "../container/Polls/Polls";
import { FriendsOverview } from "../container/Friends";

import { connect } from "react-redux";

//Images
import chatImg from "../assets/img/navbar/bottom/chat.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";
import chatOffImg from "../assets/img/navbar/bottom/chat_off.png";
import pollOffImg from "../assets/img/navbar/bottom/poll_off.png";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.CHAT]: {
            screen: FriendsOverview,
            navigationOptions: {
                tabBarIcon: (active) => <Image style={{ height: 26, width: 26, }} source={active.focused ? chatImg : chatOffImg} />
            }
        },
        [screenName.POLLS]: {
            screen: Polls,
            navigationOptions: {
                tabBarIcon: (active) => <Image style={{ height: 26, width: 26, }} source={active.focused ? pollImg : pollOffImg} />
            }
        },

    },
    {
        headerMode: "none",
        initialRouteName: screenName.POLLS,
        tabBarPosition: "bottom",
        swipeEnabled: true,
        tabBarOptions: {
            pressOpacity: 1,
            showIcon: true,
            showLabel: false,
            activeTintOpacity: 0,
            activeTintColor: "#123",
            iconStyle: {
                height: 26,
                width: 26
            },
            indicatorStyle: {
                opacity: 0,
                marginTop: -4,
                height: 8,
                width: Dimensions.get("window").width / 2 - 145,
                marginLeft: 72,
                marginBottom: -4,
                backgroundColor: "#000",
                position: "absolute",
                borderRadius: 4,
            },
            style: {
                borderTopWidth: 1,
                borderColor: "#999",
                minHeight: 52,
                backgroundColor: "#fff",
                paddingBottom: (isIPhoneX()) ? 8 : 0,
            }
        }
    }
);

class HomeNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <NavbarTop pb={this.props.pb} navigation={this.props.navigation} />
                <Navigator navigation={this.props.navigation} screenProps={{ parentNavigation: this.props.navigation }} />
            </View>
        )
    }

}

HomeNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        pb: state.user.user.meta.pb
    }
}

export default connect(mapStateToProps)(HomeNavigator);
