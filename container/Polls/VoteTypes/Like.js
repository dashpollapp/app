import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

//Like
import LikeImg from "../../../assets/img/post/polltypes/like/like_off.png"
import LikeImg_on from "../../../assets/img/post/polltypes/like/like_on.png"

import DefaultPB from "../../../assets/img/pb.png"

export default class LikeType extends React.Component {
    render() {
        let poll = this.props.poll;
        return (
            <View>
               <TouchableOpacity onPress={() => this.props.vote("", poll, 1)}>
                    <View style={like.box}>
                        <View style={like.inner}>
                            <Text style={like.amount}>{poll.vote.totalVotes}</Text>
                            <Image style={like.img} source={(poll.vote.hasVoted) ? LikeImg_on : LikeImg} />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Comments 
                <View style={comments.box}>
                    <View style={comments.comments}>
                        <View style={comments.comment}>
                            <TouchableOpacity>
                                <View style={comments.userBox}>
                                    <Image style={comments.img} source={DefaultPB} />
                                    <Text style={comments.name}></Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={comments.commentText}>Was geht ab</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={comments.inputBox}>
                            <Text style={comments.inputText}>Kommentar hinzufügen</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                */}
            </View>
        );
    }
}

LikeType.propTypes = {
    poll: PropTypes.object.isRequired
}
const comments = StyleSheet.create({
    inputBox: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 8,
    },
    inputText: {
        fontFamily: "GS2",
        color: "#636e72",
        fontSize: 14,
    },
    


    userBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    comment: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontFamily: "GS2",
        color: "#3885e2",
        fontSize: 14,
        paddingHorizontal: 4,
    },
    commentText: {
        fontFamily: "GS2",
        color: "#aaa",
        fontSize: 14,

    },
    img: {
        height: 16,
        width: 16,
        borderRadius: 6,
    
    },

    box: {

    },
})
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