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
                title: "<Freunde>",
                lastMessage: {
                    text: "Profil anzeigen",
                    time: "",
                    from: 0, //0 = ich, 1 = er, "string" = Name in Gruppe
                    readed: 1,
                },
                priority: 1,
            }
        ]

        return (
            <View style={{ backgroundColor: "#fff", height: "100%", opacity: 1, }}>
                <ScrollView style={{ height: "100%", }}>

                    <ChatItem data={chat[0]} />
                    <ChatItem data={chat[1]} />
                    <ChatItem data={chat[2]} />

                </ScrollView>
            </View>
        );
    }
}

ChatOverview.propTypes = {
    navigation: PropTypes.object.isRequired,
}
