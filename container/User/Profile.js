import { ScrollView, View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import profileImage from "../../assets/img/dev/pp3.jpg"
import mapImage from "../../assets/img/map.png"

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { screenProps } = this.props;
        return (
            <ScrollView>

                <Image style={s.pb} source={(screenProps.user.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + screenProps.user.meta.pb } : profileImage} />

                <Text style={s.fullname}>{screenProps.user.fullname}</Text>
                <Text style={s.name}>@{screenProps.user.username}</Text>

                {/*<TouchableOpacity>
                    <View style={[s.followButton]}>
                        <Text style={[s.followButtonText]}>Folgen</Text>
                    </View>
                </TouchableOpacity>*/}
                <View style={[s.followBox]}>
                    <TouchableOpacity>
                        <View style={[s.followButton_on]}>
                            <Text style={[s.followButtonText_on]}>Folgst du</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={s.followTextBox}>
                        <Text style={[s.followerConterText]}>130 Follower</Text>
                        <Text style={[s.followConterText]}>Folgt dir & 41</Text>
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