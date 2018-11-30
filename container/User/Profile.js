import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import profileImage from "../../assets/img/dev/pp3.jpg"
import mapImage from "../../assets/img/map.png"

import s from './ProfileStyle';

import { connect } from "react-redux";
import { follow_user } from '../../actions'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    followButton = (user) => {
        this.props.follow_user(user);
    }


    render() {
        //console.log(this.props)
        const { screenProps } = this.props;
        const { user } = screenProps;
        const { following } = user;

        console.log(user);

        if (!user) {
            return (<View><Text>user: false</Text></View>)
        }

        return (
            <ScrollView>

                <Image style={s.pb} source={(user.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + user.meta.pb } : profileImage} />

                <Text style={s.fullname}>{user.fullname}</Text>
                <Text style={s.name}>@{user.username}</Text>

                <View style={[s.followBox]}>
                    <TouchableOpacity onPress={() => this.followButton(user)}>
                        <View style={(following) ? s.followButton_on : s.followButton}>
                            <Text style={(following) ? s.followButtonText_on : s.followButtonText}>{(following) ? "Folgst du" : "Folgen"}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={s.followTextBox}>
                        <Text style={[s.followerConterText]}>{user.num.follower} Follower</Text>
                        <Text style={[s.followConterText]}>{(user.followingYou) ? `Folgt dir & ${user.num.following - 1}` : `Folgt ${user.num.following}`}</Text>
                    </View>
                </View>

                <Image style={s.map} source={mapImage} />

            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow_user: user => {
            dispatch(follow_user(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(Profile);