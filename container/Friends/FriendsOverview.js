import React from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from "prop-types";

import FriendItem from "./FriendItem"
import D from "../../assets/style/default";

import { get_friends } from "../../actions";

import { css } from "./FriendStyle"
import { connect } from "react-redux";

class ChatOverview extends React.Component {

    componentDidMount() {
        this.props.get_friends();
    }

    render() {

        const chat = [
            {
                title: "<Alle>",
                lastMessage: {
                    text: "Profil anzeigen",
                    time: "",
                    from: 0, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 1,
                },
                priority: 1,
            },
            {
                title: "<Meine>",
                lastMessage: {
                    text: "Profil anzeigen",
                    time: "",
                    from: 0, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 1,
                },
                priority: 1,
            },
            {
                title: "<Freundeeeeee>",
                lastMessage: {
                    text: "Profil anzeigen",
                    time: "",
                    from: 0, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 1,
                },
                priority: 1,
            }
        ]
        let friendsJsx = [];
        this.props.friends.forEach(friend => friendsJsx.push(<FriendItem navigation={this.props.navigation} key={"friend_" + friend._id} data={friend} />))
        return (
            <View style={{ backgroundColor: "#fff", height: "100%", opacity: 1, }}>
                <ScrollView style={{ height: "100%", }}>
                    <View style={D.boxHeader}>
                        <Text style={D.h1}>Deine Freunde:</Text>
                    </View>
                    {friendsJsx}

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({ friends: state.friends });
const mapDispatchToProps = dispatch => {
    return {
        get_friends: () => {
            dispatch(get_friends());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatOverview)