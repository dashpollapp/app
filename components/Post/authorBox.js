import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import formatTime from '../../utils/formatTime';
import * as screenNames from '../../constants/screenNames';
import DefaultPB from "../../assets/img/pb.png";

const authorBox = (props) => {

    const { poll, clickable = true } = props;
    const pb = (poll.author.meta && poll.author.meta.pb !== "default") ? { uri: "https://api.dashpoll.net/pb/" + poll.author.meta.pb} : DefaultPB;

    return (
        <TouchableOpacity disabled={!clickable} onPress={() => props.navigation.push(screenNames.USER, { userObj: poll.author })}>
            <View style={css.authorBox}>
                <Image style={css.pPB} source={pb} />
                <Text style={css.pSubtitle}>{poll.author.username} {formatTime(poll.createdAt)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const css = StyleSheet.create({
    pSubtitle: {
        color: "#555",
        fontFamily: "GS2",
        fontSize: 15,
        marginHorizontal: 12,
    },
    pPB: {
        height: 32,
        width: 32,
        borderRadius: 32 / 2.35,
        backgroundColor: "#aaa",
    },
    authorBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
})

export default authorBox;