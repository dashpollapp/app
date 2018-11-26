import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import { View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import * as screenName from "../constants/screenNames";
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Screens
import Chat from "../container/User/Chat";
import Posts from "../container/User/Posts";
import Profile from "../container/User/Profile";

//Images
import chatImg from "../assets/img/navbar/bottom/chat.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";
import chatOffImg from "../assets/img/navbar/bottom/chat_off.png";
import pollOffImg from "../assets/img/navbar/bottom/poll_off.png";
//import defaultProfileImg from "../assets/img/pb.png"
import defaultProfileImg from "../assets/img/dev/pp3.jpg"

function NavigatorClass(props) {

    const { screenProps } = props;
    const pb = (screenProps.userObj) ? screenProps.userObj.meta.pb : false;
    console.log(screenProps.userObj);

    const Navigator = createMaterialTopTabNavigator(
        {
            [screenName.USER_CHAT]: {
                screen: Chat,
                navigationOptions: {
                    tabBarIcon: (active) => <Image style={{ height: 26, width: 26, }} source={active.focused ? chatImg : chatOffImg} />
                }
            },
            [screenName.USER_PROFILE]: {
                screen: Profile,
                navigationOptions: {
                    tabBarIcon: (active) => <Image style={{ height: 44, width: 44, borderRadius: 18, marginTop: -3 }} source={(pb) ? { uri: "https://api.dashpoll.net/pb/" + pb } : defaultProfileImg} />
                }
            },
            [screenName.USER_POSTS]: {
                screen: Posts,
                navigationOptions: {
                    tabBarIcon: (active) => <Image style={{ height: 26, width: 26, }} source={active.focused ? pollImg : pollOffImg} />
                }
            },

        },
        {
            headerMode: "none",
            initialRouteName: screenName.USER_PROFILE,
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
                    marginTop: -4,
                    height: 8,
                    width: Dimensions.get('window').width / 2 - 145,
                    marginLeft: 40,
                    marginBottom: -4,
                    backgroundColor: "#000",
                    position: "absolute",
                    borderRadius: 4,
                },
                style: {
                    borderTopWidth: 1,
                    borderColor: "#d8d8d8",
                    minHeight: 52,
                    backgroundColor: "#fff",
                }
            }
        })

    return <Navigator screenProps={props.screenProps} />

}




export default class HomeNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    //static router = Navigator.router;
    //static router = NavigatorClass.router; -> TODO: ist .router noch verfügbar als gerenderter component? .router public in NavigatorClass machen

    //Bitte fixen.. Bekomme wieder 100 Warnings wegen Navigator :) Thx
    //Warning: You should only render one navigator explicitly in your app, and other navigators should by rendered by including them in that navigator.

    render() {

        const { navigation } = this.props;
        const userObj = navigation.getParam("userObj", false);
        const userId = navigation.getParam("userId", false);

        var NavTopTitle = ((userObj) ? "@" + userObj.username : "Dein Profil")

        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <NavbarTopBack title={NavTopTitle} navigation={this.props.navigation} />
                <NavigatorClass screenProps={{ userObj, userId, parentNavigation: navigation }} />
            </View>
        )
    }

}

HomeNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}
