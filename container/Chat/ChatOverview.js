import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import ChatItem from "./ChatOverviewItem"

import { css } from "./ChatOverviewStyle"

export default class ChatOverview extends React.Component {
    render() {

        const chat = [
            {
                title: "Kax Maier",
                lastMessage: {
                    text: "Juhu",
                    time: "12:23",
                    from: 1, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 0,
                },
                priority: 4,
            },
            {
                title: "Konrad Baier",
                lastMessage: {
                    text: "Ja",
                    time: "12:23",
                    from: 1, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 0,
                },
                priority: 3,
            },
            {
                title: "Max Mayer",
                lastMessage: {
                    text: "Nein sorry",
                    time: "11:23",
                    from: 1, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 0,
                },
                priority: 2,
            },
            {
                title: "Mayer Baier",
                lastMessage: {
                    text: "Ja kenn ich",
                    time: "12:43",
                    from: 1, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 0,
                },
                priority: 1,
            },
            {
                title: "Baier Mayer",
                lastMessage: {
                    text: "LW",
                    time: "12:31",
                    from: 1, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 0,
                },
                priority: 1,
            },
            {
                title: "Inge",
                lastMessage: {
                    text: "Lolll",
                    time: "12:31",
                    from: 0, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 1,
                },
                priority: 1,
            }
        ]

        return (
            <View style={{ backgroundColor: "#fff", height: "100%" }}>
                <ScrollView style={{ height: "100%", }}>

                    <ChatItem data={chat[0]} />
                    <ChatItem data={chat[1]} />
                    <ChatItem data={chat[2]} />
                    <ChatItem data={chat[3]} />
                    <ChatItem data={chat[4]} />
                    <ChatItem data={chat[5]} />

                </ScrollView>
            </View>
        );
    }
}

ChatOverview.propTypes = {
    navigation: PropTypes.object.isRequired,
}
