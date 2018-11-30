import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import profileImage from "../../assets/img/dev/pp3.jpg"
import mapImage from "../../assets/img/map.png"

import s from '../User/ProfileStyle';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

                <Image style={s.pb} source={(user.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + user.meta.pb } : profileImage} />

                <Text style={s.fullname}>{user.fullname}</Text>
                <Text style={s.name}>@{user.username}</Text>

            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUserProfile: state.other_users, 
    }
}


export default connect(mapStateToProps)(Profile);

