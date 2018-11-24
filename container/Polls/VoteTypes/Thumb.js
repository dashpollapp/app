import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import React from "react";

//Like
import LikeImg from "../../../assets/img/post/polltypes/like/like_off.png"
import LikeImg_on from "../../../assets/img/post/polltypes/like/like_on.png"

export default class ThumbType extends React.Component {
    render() {
        let poll = this.props.poll;
        return (
            <View style={like.test}>
                <TouchableOpacity onPress={() => this.props.vote("", poll, 0)}>{/*daume runter = choice 0 */}
                    <Image style={like.img} source={(poll.vote.hasVoted === 0) ? LikeImg_on : LikeImg} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.vote("", poll, 1)} style={like.box}>
                    <Image style={like.img} source={(poll.vote.hasVoted === 1) ? LikeImg_on : LikeImg} />{/* hoch = choice 1*/}
                    <Text>like</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const like = StyleSheet.create({
    test: {
        height: 26,
        flex: 1,
        flexDirection: 'row'
    },
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
    },
    inner: {
        alignItems: "center",
        flexDirection: "row",
        padding: 4,
    },
})