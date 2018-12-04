import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList, Linking, Share, Alert } from "react-native";
import { BlurView } from 'expo';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import s from "./PollStyle";

import * as screenNames from '../../constants/screenNames';

import Description from "../../components/Description";

import Option from '../../components/Post/Option';
import Author from '../../components/Post/authorBox';
import PostModal from '../../components/Post/Modal';

import PollTypes from "./PollTypes";
import LoadMedia from './LoadMedia';
import { load_home_polls, vote } from "../../actions";
class PollsFlatlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: "",
            flatListRefreshing: false,
            modalVisible: false,
        }
    }

    flatListRefresh = () => {
        this.setState({ flatListRefreshing: true });
        this.props.load_home_polls(0, true);
        setTimeout(() => this.setState({ flatListRefreshing: false }), 500)
    }

    onEndReached = () => {
        if (this.props.polls.polls.home.length > 0 && !this.props.isFetchingPolls) {
            this.props.load_home_polls(this.props.polls.polls.home.length)
        } else { console.log("NULLLLLL"); }
    }


    //Header der Mitsrollt
    loadHeader = () => {
        return (
            <View style={s.boxHeader}>
                <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.POSTFILTER)}>
                    <Text style={s.h1}>Beiträge:</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.CREATE)}>
                    <Text style={s.link}>+ Neue Umfrage</Text>
                </TouchableOpacity>
            </View>
        )
    }

    openUrl(url) {

        let newUrl;

        if(url.split(":")[0] === "https" || url.split(":")[0] === "http") {
            newUrl = url;
        } else {
            newUrl = "http://" + url;
        }

        Alert.alert(
            'Weiterleitung',
            'Du wirst auf dein Internet Browser weitergeleitet.',
            [
                {text: 'Abbrechen', style: 'cancel'},
                {text: 'OK', onPress: () => Linking.openURL(newUrl)},
            ],
            { cancelable: false }
        )

    }

    render() {
        return (
            <View style={s.box}>

                <PostModal />

                <FlatList
                    style={s.posts}
                    data={this.props.polls.polls.home}
                    extraData={this.props.polls} //wird nur wegen loading geändert -> muss das noch richtig machen
                    ListEmptyComponent={<Text style={s.loadingText}>Lädt Beiträge...</Text>}
                    ListHeaderComponent={this.loadHeader}
                    keyExtractor={(item) => item._id}
                    refreshing={this.state.flatListRefreshing}
                    onRefresh={this.flatListRefresh}
                    //removeClippedSubviews={true}
                    onEndReachedThreshold={0.4}
                    onEndReached={this.onEndReached}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[s.post, (index !== 0) ? { borderTopWidth: 1, borderColor: "#eee" } : null]}>

                                {(this.state.options === item._id) ? <Option poll={item} navigation={this.props.navigation} /> : null}

                                <View style={s.pPostHeader}>

                                    <Author poll={item} navigation={this.props.navigation} />

                                    <TouchableOpacity onPress={() => (this.state.options === item._id) ? this.setState({ options: "" }) : this.setState({ options: item._id })}>
                                        <Text style={s.pTitle}>{item.heading}</Text>
                                    </TouchableOpacity>

                                </View>

                                <Description 
                                    style={s.description}
                                    text={item.text}

                                    //Style
                                    urlStyle={s.url}
                                    usernameStyle={{color: "red"}}
                                    hashtagStyle={{color: "yellow"}}

                                    //Visible
                                    showUrl={true}
                                    showUsername={true}
                                    showHashtag={true}

                                    //Events
                                    urlClick={(url) => this.openUrl(url)}
                                    usernameClick={(username) => console.log("Username", username)}
                                    hashtagClick={(hashtag) => console.log("Hashtag", hashtag)}
                                />

                                {/* Media */}
                                {item.media ? <LoadMedia poll={item} /> : null}

                                {/* Umfragenteil */}
                                <View style={s.poll}><PollTypes vote={this.props.vote} poll={item} /></View>

                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

PollsFlatlist.propTypes = {
    polls: PropTypes.object.isRequired,
    vote: PropTypes.func
}

const mapStateToProps = state => {
    return {
        polls: state.polls,
        isFetchingPolls: state.polls.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load_home_polls: (skip, refres) => {
            dispatch(load_home_polls(skip, refres))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollsFlatlist);