import { ScrollView, View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import profileImage from "../../assets/img/dev/pp3.jpg"
import mapImage from "../../assets/img/map.png"

const mockUserObj = {
    _id: "",
    username: "",
    fullname: "",
    meta: {
        pb: ""
    },
    following: false,
    num: {
        following: 0,
        follower: 0
    }
}



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    followButton = () => {

    }


    render() {
        const { screenProps } = this.props;
        const user = (screenProps.userObj) ? screenProps.userObj : mockUserObj
        const following = user.following;

        return (
            <ScrollView>

                <Image style={s.pb} source={(user.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + user.meta.pb } : profileImage} />

                <Text style={s.fullname}>{user.fullname}</Text>
                <Text style={s.name}>@{user.username}</Text>

                {/*<TouchableOpacity>
                    <View style={[s.followButton]}>
                        <Text style={[s.followButtonText]}>Folgen</Text>
                    </View>
                </TouchableOpacity>*/}
                <View style={[s.followBox]}>
                    <TouchableOpacity onPress={() => this.followButton()}>
                        <View style={(following) ? s.followButton_on : s.followButton}>
                            <Text style={(following) ? s.followButtonText_on : s.followButtonText}>{(following) ? "Folgst du" : "Folgen"}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={s.followTextBox}>
                        <Text style={[s.followerConterText]}>0 Follower</Text>
                        <Text style={[s.followConterText]}>"Folgt dir & 0"</Text>
                    </View>
                </View>

                <Image style={s.map} source={mapImage} />

            </ScrollView>
        );
    }
}

var screenWidth = Dimensions.get('window').width
var PBSize = screenWidth - 84
var PBMargin = (screenWidth - PBSize) / 2

export var s = StyleSheet.create({
    followTextBox: {
        marginHorizontal: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    followerConterText: {
        marginTop: 8,
        fontFamily: "GS3",
        color: "#0984e3",
        fontSize: 15,
    },
    followConterText: {
        marginLeft: 12,
        marginTop: 8,
        fontFamily: "GS2",
        color: "#aaa",
        fontSize: 15,
    },



    followBox: {
        marginHorizontal: 52,
    },



    followButtonText_on: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#fff",
        fontSize: 15,
    },
    followButton_on: {
        backgroundColor: "#0984e3",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 32,
    },



    //Wenn man nicht folgt
    followButtonText: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#0984e3",
        fontSize: 15,
    },
    followButton: {
        borderWidth: 3,
        borderColor: "#0984e3",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 32,
    },


    map: {
        marginVertical: 32,
        width: PBSize,
        height: PBSize * 0.625,
        margin: PBMargin,
    },
    fullname: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#111",
        fontSize: 20,
    },
    name: {
        textAlign: "center",
        fontFamily: "GS1",
        color: "#777",
        fontSize: 16,
    },
    pb: {
        width: PBSize,
        height: PBSize,
        borderRadius: PBSize / 2 - 32,
        margin: PBMargin,
        marginBottom: PBMargin / 2,
    }
})
export default Profile;