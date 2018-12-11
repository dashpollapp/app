import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from "prop-types";
import ImageCache from "../../components/ImageCache";
import { css } from "./FriendStyle"

export default class ChatOverviewItem extends Component {
    render() {

        let data = this.props.data

        //let lastMessage = data.lastMessage.text
        let lastMessage = data.meta.bio || "";
        let pb = data.meta.pb || false;
        //let title = data.title
        let title = data.username;

        let showAsNew = true //data.lastMessage.from != 0 && data.lastMessage.readed == 0
        let chatTime = "." //data.lastMessage.time

        let priorityColor = "#0ccc6c";
        /*

        switch (data.priority) {
            case 1:
                priorityColor = "#0ccc6c"
                break;
            case 2:
                priorityColor = "#e0a83e"
                break;
            case 3:
                priorityColor = "#db7a41"
                break;
            case 4:
                priorityColor = "#d83a3a"
                break;
            default:
                priorityColor = "#a3a3a3"
                break;
        }

        //Gelesen: Uhrzeit > Textfarbe > Grau
        data.lastMessage.readed != 0 ? priorityColor = "#aaa" : null*/

        return (
            <TouchableOpacity onPress={() => this.props.navigation.push("USER", { userObj: this.props.data })}>
                <View style={[css.chat, /*showAsNew ? css.chatNew : null*/]}>

                    {/*showAsNew ? <View style={[css.chatNewBox, { backgroundColor: priorityColor }]}></View> : null*/}

                    <ImageCache style={css.pb} source={pb} />
                    <View style={css.text}>
                        <Text style={css.name}>{title}</Text>
                        <Text numberOfLines={1} style={css.lastMessage}>{lastMessage}</Text>
                    </View>
                    {/*<Text style={[css.sendTime, css.sendTimeNew, { color: priorityColor }]}>{chatTime}</Text>*/}
                </View>
            </TouchableOpacity>
        )
    }
}
