import { ScrollView, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";

import DefaultPB from "../../assets/img/pb.png"
import mapImage from "../../assets/img/map.png"
import KiImg from "../../assets/img/ki.png"

import s from "./ProfileStyle";
import D from "../../assets/style/default"

import PB from "../../components/ImageCache";

import { connect } from "react-redux";
import { follow_user } from "../../actions"

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
        const { userId } = screenProps;


        const user = this.props.currentUserProfile[userId];


        //console.log(user);

        if (!user) {
            return (<View></View>)
        }
        const { following } = user;
        return (
            <ScrollView>
                <PB style={s.pb} source={user.meta.pb} />

                <Text style={s.fullname}>{user.fullname}</Text>
                <Text style={s.name}>@{user.username}</Text>

                <View style={[s.followBox]}>
                    <TouchableWithoutFeedback onPress={() => this.followButton(user)}> 
                        <View style={(following) ? s.followButton_on : s.followButton}>
                            <Text style={(following) ? s.followButtonText_on : s.followButtonText}>{(following) ? "Folgst du" : "Folgen"}</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={s.followTextBox}>
                        <Text style={[s.followerConterText]}>{user.num.follower} Follower</Text>
                        <Text style={[s.followConterText]}>{(user.followingYou) ? `Folgt dir & ${user.num.following - 1}` : `Folgt ${user.num.following}`}</Text>
                    </View>
                </View>


                <View style={[s.paddingBox]}>  

                    <Text style={[s.profileInfo]}>Website</Text>
                    <TouchableOpacity>
                        <Text style={[s.profileInfoAnsw, s.profileInfoAnswURL]}>dashpoll.net</Text>
                    </TouchableOpacity>

                    <Text style={[s.profileInfo]}>Wohnort</Text>
                    <Text style={[s.profileInfoAnsw]}>Frankfurt, Germany</Text>

                    <View style={[D.kiBoxes, {opacity: 0,}]}>
                        <TouchableOpacity style={D.kiBox}>
                            <Image style={D.kiImg} source={KiImg}/>
                            <Text style={D.kiText}>Neue Info</Text>
                        </TouchableOpacity>
                    </View>
        



                    <Text style={[s.quote]}>{user.meta.bio}</Text>
                    
                    <View style={[D.kiBoxes, {opacity: 0,}]}>
                        <TouchableOpacity style={D.kiBox}>
                            <Image style={D.kiImg} source={KiImg}/>
                            <Text style={D.kiText}>Zitat hinzufügen</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>



            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUserProfile: state.other_users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow_user: user => {
            dispatch(follow_user(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);