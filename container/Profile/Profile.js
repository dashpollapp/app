import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import DefaultPB from "../../assets/img/pb.png"

import { ImagePicker, Permissions } from "expo";

import { upload_pb } from "../../actions"

import s from "../User/ProfileStyle";
import FW from "../../assets/style/framework"
import D from "../../assets/style/default"

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _uploadProfilePB = async () => {

        const { status: cameraRollPerm } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (cameraRollPerm === "granted") {

            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: "Images",
                aspect: [1, 1],
            });

            if (!result.cancelled) {
                this.props.upload_pb(result);
            }

        }

    }


    render() {
        const { screenProps } = this.props;
        const { userId } = screenProps;

        const user = this.props.currentUserProfile[userId];

        if (!user) {
            return (<View></View>)
        }

        return (
            <ScrollView>

                <TouchableOpacity onPress={() => this._uploadProfilePB()}>
                    <Image style={[s.pb]} source={(user.meta.pb && user.meta.pb !== "default") ? { uri: "https://api.dashpoll.net/pb/" + user.meta.pb } : DefaultPB} />
                </TouchableOpacity>

                <Text style={[s.fullname]}>{user.fullname}</Text>
                <Text style={[s.name]}>@{user.username}</Text>

                <View style={[FW.p4]}>
                    <Text style={[D.h3]}>Dir folgen: <Text style={[D.b]}>{user.num.follower}</Text></Text>
                    <Text style={[D.h3]}>Du folgst: <Text style={[D.b]}>{user.num.following}</Text></Text>
                    <Text style={[D.h3]}>Beiträge: <Text style={[D.b]}>{user.num.polls}</Text></Text>
                </View>

            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUserProfile: state.other_users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        upload_pb: image => {
            dispatch(upload_pb(image));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

