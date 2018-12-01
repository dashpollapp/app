import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import profileImage from "../../assets/img/dev/pp3.jpg"

import { ImagePicker } from "expo";

import { upload_pb } from "../../actions"

import s from '../User/ProfileStyle';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _uploadProfilePB  = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: "Images",
            aspect: [1, 1],
        });
      
        if(!result.cancelled) {
            this.props.upload_pb(result);
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
                    <Image style={s.pb} source={(user.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + user.meta.pb } : profileImage} />
                </TouchableOpacity>

                <Text style={s.fullname}>{user.fullname}</Text>
                <Text style={s.name}>@{user.username}</Text>

                <Text>Follower: {user.num.follower}</Text>
                <Text>Following: {user.num.following}</Text>
                <Text>Polls: {user.num.polls}</Text>

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

