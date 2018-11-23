import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

//Like
import LikeImg from "../../../assets/img/post/polltypes/like/like_off.png"
import LikeImg_on from "../../../assets/img/post/polltypes/like/like_on.png"

export default class LikeType extends React.Component {
	render() {
		return (
			<TouchableOpacity>
                <View style={like.box}>
                    <View style={like.inner}>
                        <Text style={like.amount}>12x</Text>
                        <Image style={like.img} source={LikeImg_on}/>
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