import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import { Dimensions, Image } from "react-native";
import PropTypes from "prop-types";
import Chat from "../container/User/Chat";
import Polls from "../temp/Temp";
import Profile from "../container/User/Profile";

import css from "../assets/style/home";

import ChatImage from "../assets/img/navbar/bottom/chat.png";
import PollsImage from "../assets/img/navbar/bottom/poll.png";
import FriendsImage from "../assets/img/navbar/bottom/friends.png";

class UserNavigator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { initialRouteName = "Polls" } = this.props;

        Navigator = createMaterialTopTabNavigator(
            {
                Chat: {
                    screen: Chat,
                    navigationOptions: {
                        tabBarIcon: () => <Image style={css.bottomImage} source={ChatImage} />
                    }
                },
                Polls: {
                    screen: Polls,
                    navigationOptions: {
                        tabBarIcon: () => <Image style={css.bottomImage} source={PollsImage} />
                    }
                },
                Profile: {
                    screen: Profile,
                    navigationOptions: {
                        tabBarIcon: () => <Image style={css.bottomImage} source={FriendsImage} />
                    }
                }
            },
            {
                initialRouteName,
                tabBarPosition: "bottom",
                swipeEnabled: true,
                backBehavior: false,
                tabBarOptions: {
                    indicatorStyle: {
                        marginTop: -4,
                        height: 12,
                        width: Dimensions.get("window").width / 4 - 32,
                        marginLeft: Dimensions.get("window").width * 0.045,
                        backgroundColor: "#000",
                        borderRadius: 4,
                        position: "absolute",
                        bottom: -8
                    },
                    style: {
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        shadowColor: "#111",
                        backgroundColor: "#fff",
                        elevation: 5
                    },
                    showIcon: true,
                    showLabel: false
                }
            }
        );
    }

    render() {
        return <Navigator screenProps={this.props.screenProps} />;
    }
}

UserNavigator.propTypes = {
    screenProps: PropTypes.object.isRequired
}


export default UserNavigator;
