import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

//Like
import LikeImg from "../../../assets/img/post/polltypes/like/like_off.png"
import LikeImg_on from "../../../assets/img/post/polltypes/like/like_on.png"

export default class LikeType extends React.Component {
    render() {
        let poll = this.props.poll;
        return (
            <TouchableOpacity onPress={() => this.props.vote("", poll, 1)}>
                <View style={like.box}>
                    <View style={like.inner}>
                        <Text style={like.amount}>{poll.vote.totalVotes}x</Text>
                        <Image style={like.img} source={(poll.vote.hasVoted) ? LikeImg_on : LikeImg} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const like = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
        paddingBottom: 16,
    },
    amount: {
        fontFamily: "GS1",
        color: "#aaa",
        fontSize: 16,
        marginHorizontal: 4,
    },
    img: {
        height: 26,
        width: 26,
        marginHorizontal: 4,
    },
    inner: {
        alignItems: "center",
        flexDirection: "row",
        padding: 4,
    },
})