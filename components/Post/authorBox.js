import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import formatTime from '../../utils/formatTime';

import DefaultPB from "../../assets/img/pb.png";

const authorBox = (props) => {

    const poll = props.poll;

    const pb = (poll.author.meta && poll.author.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + poll.author.meta.pb} : DefaultPB;

    return (
        <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER, { userObj: poll.author })}>
            <View style={css.authorBox}>
                <Image style={css.pPB} source={pb} />
                <Text style={css.pSubtitle}>{poll.author.username} {formatTime(poll.createdAt)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const css = StyleSheet.create({
    pSubtitle: {
        color: "#aaa",
        fontFamily: "GS2",
        fontSize: 14,
        marginHorizontal: 8,
    },
    pPB: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2.35,
        backgroundColor: "#aaa",
    },
    authorBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
})

export default authorBox;