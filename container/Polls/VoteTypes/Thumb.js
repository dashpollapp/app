import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import React from "react";
import PropTypes from "prop-types";

//Like
import LikeImg from "../../../assets/img/post/polltypes/thumb/thumb.png"
import LikeImg_on from "../../../assets/img/post/polltypes/thumb/thumb_on.png"

{  /*          <View style={like.test}>
                <TouchableOpacity onPress={() => this.props.vote("", poll, 0)}>{/*daume runter = choice 0 /}
                    <Image style={like.img} source={(poll.vote.hasVoted === 0) ? LikeImg_on : LikeImg} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.vote("", poll, 1)} style={like.box}>
                    <Image style={like.img} source={(poll.vote.hasVoted === 1) ? LikeImg_on : LikeImg} />{/* hoch = choice 1/}
                </TouchableOpacity>
            </View>*/}

export default class ThumbType extends React.Component {
    render() {

        let { poll, clickable } = this.props;


        let allVotes = poll.vote.likes + poll.vote.dislikes;
        let likePercent = (poll.vote.likes / allVotes) * 100;

        (poll.vote.likes == 0 && poll.vote.dislikes == 0) ? likePercent = 50 : null;

        let ThumbUpImg = (poll.vote.hasVoted === 1) ? (clickable) ? LikeImg_on : LikeImg : LikeImg;
        let ThumbDownImg = (poll.vote.hasVoted === 0) ? (clickable) ? LikeImg_on : LikeImg : LikeImg;

        return (
            <View style={thumb.box}>
                <View style={thumb.inner}>
                    <View style={thumb.thumbBoxes}>
                        <TouchableOpacity disabled={!clickable} onPress={() => this.props.vote("", poll, 1)}>
                            <View style={thumb.thumbBox}>
                                <Image style={[thumb.img, { marginTop: 8, transform: [{ rotate: "180deg" }] }]} source={ThumbUpImg} />
                                <Text style={thumb.amount}>{poll.vote.likes}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!clickable} onPress={() => this.props.vote("", poll, 0)}>
                            <View style={thumb.thumbBox}>
                                <Image style={thumb.img} source={ThumbDownImg} />
                                <Text style={thumb.amount}>{poll.vote.dislikes}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[thumb.bar,]}>
                        <LinearGradient
                            style={[thumb.inner, { width: likePercent + "%" }]}
                            colors={['#b8596e', '#739dd5']}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 0.9, y: 0.1 }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

ThumbType.propTypes = {
    poll: PropTypes.object.isRequired
}

const thumb = StyleSheet.create({
    bar: {
        width: 170,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#ccc",
    },
    inner: {
        height: "100%",
        width: "50%",
        borderRadius: 3,
    },
    box: {
        flex: 1,
        alignItems: "flex-end",
    },
    img: {
        height: 24,
        width: 24,
        margin: 6,
    },
    thumbBoxes: {
        flexDirection: "row",
        width: 170,
    },
    thumbBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    amount: {
        fontFamily: "GS1",
        color: "#aaa",
        fontSize: 16,
        marginHorizontal: 4,
    }
})