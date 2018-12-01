import React from "react";
import { View, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import PropTypes from "prop-types";

import * as screenName from "../constants/screenNames";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";

//Container
import Chat from "../container/User/Chat";
import Posts from "../container/User/Posts";
import Profile from "../container/User/Profile";
import OwnProfile from "../container/Profile/Profile";

import { store } from "../utils"

//Images
import chatImg from "../assets/img/navbar/bottom/chat.png";
import pollImg from "../assets/img/navbar/bottom/poll.png";
import chatOffImg from "../assets/img/navbar/bottom/chat_off.png";
import pollOffImg from "../assets/img/navbar/bottom/poll_off.png";
import DefaultPB from "../assets/img/pb.png"
import { connect } from "react-redux";
import { load_user } from "../actions"
//import defaultProfileImg from "../assets/img/pb.png"

function NavigatorClass(props) {

    const { pb, isOwnProfile } = props;
    const Navigator = createMaterialTopTabNavigator(
        {
            [screenName.USER_CHAT]: {
                screen: Chat,
                navigationOptions: {
                    tabBarIcon: (active) => <Image style={{ height: 26, width: 26, }} source={active.focused ? chatImg : chatOffImg} />
                }
            },
            [screenName.USER_PROFILE]: {
                screen: isOwnProfile ? OwnProfile : Profile,
                navigationOptions: {
                    tabBarIcon: (active) => <Image style={{ height: 44, width: 44, borderRadius: 18, marginTop: -3 }} source={(pb !== "default") ? { uri: "https://api.dashpoll.net/pb/" + pb } : DefaultPB} />
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
            lazy: true,
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
                    width: Dimensions.get("window").width / 2 - 145,
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




class HomeNavigator extends React.Component {

    constructor(props) {
        super(props);
        let userObj = this.props.navigation.getParam("userObj", false);
        if(!userObj){
            //Wenns das eigene Profil ist
            userObj = { _id: this.props.ownUserId } 
        };
        this.state = {
            userObj
        }
    }

    componentDidMount() {
        this.props.load_user(this.state.userObj._id);
    }

    //Nicht den ganzen Navigator rerendern, falls man (ent)folgt
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.requestedProfile[this.state.userObj._id] && this.props.ownUserId !== this.state.userObj._id) {
            if (this.props.requestedProfile[this.state.userObj._id].following !== nextProps.requestedProfile[this.state.userObj._id].following) return false;

        }
        return true
    }

    //Man muss das userobj mit minimal dem username & _id übergeben ( -> für NavBar)
    //Dann wird im Redux store nach dieser ID geschaut, falls diese schon
    //existiert, wird gleich gerendert und von der APi der user geupdatet, (und dann nochmal gedenrert => TODO: shallow-vergleich für 1x rendern)
    //wenn nicht ist user = false und die User-Components zeigen in der Navbar
    //nur den Username an, aber der Inhalt bleibt leer, bis durch cpm der Redux-
    //State geuptatet worden ist. 
    //WIR RENDERN NICHT NACH USEROBJ

    render() {

        const { navigation, ownUserId } = this.props;
        let user = this.props.requestedProfile[this.state.userObj._id] || false;

        let navTopTitle;
        if (user) {
            navTopTitle = (user._id === ownUserId) ? "Dein Profil" : `@${user.username}`
        } else {
            navTopTitle = (this.state.userObj._id === ownUserId) ? "Dein Profil" : `@${this.state.userObj.username}`
        }

        const isOwnProfile = this.state.userObj._id === ownUserId;

        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <NavbarTopBack title={navTopTitle} navigation={this.props.navigation} />
                <NavigatorClass isOwnProfile={isOwnProfile} navigation={navigation} pb={(user) ? user.meta.pb : false} screenProps={{ userId: user._id, parentNavigation: navigation }} />
            </View>
        )
    }

}



HomeNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        ownUserId: state.user.user._id,
        requestedProfile: state.other_users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load_user: userId => {
            dispatch(load_user(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)