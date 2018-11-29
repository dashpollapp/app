import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList, Share } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import s from "./PollStyle";

import * as screenNames from '../../constants/screenNames';

import formatTime from '../../utils/formatTime';

import DefaultPB from "../../assets/img/pb.png";
import optionsBlock from "../../assets/img/post/options/block.png"
import optionsStats from "../../assets/img/post/options/stats.png"
import optionsShare from "../../assets/img/post/options/share.png"

import PollTypes from "./PollTypes";
import LoadMedia from './LoadMedia';
import { load_home_polls, vote } from "../../actions";
class PollsFlatlist extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        flatListRefreshing: false
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
        return(
            <View style={s.boxHeader}>
                <TouchableOpacity>
                    <Text style={s.h1}>Beiträge:</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.CREATE)}> 
                    <Text style={s.link}>+ Neue Umfrage</Text>
                </TouchableOpacity>
            </View>
        )
    }

    sharePoll(poll) {
        Share.share({
            message: "'" + poll.heading + "' - Stimme jetzt ab: https://dashpoll.net/poll/" + poll._id,
            url: 'https://dashpoll.net/poll/' + poll._id,
            title: 'Umfrage'
          }, {
            // Android:
            dialogTitle: 'Beitrag teilen',
            // iOS:
            excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter' //Twitter
            ]
          })

        console.log(poll)
    }

    render() {
        return (
            <View style={s.box}>
                <FlatList
                    style={s.posts}
                    data={this.props.polls.polls.home}
                    extraData={this.props.polls} //wird nur wegen loading geändert -> muss das noch richtig machen
                    ListEmptyComponent={<Text style={s.pTitle}>Noch keine Polls.</Text>}
                    ListHeaderComponent={this.loadHeader}
                    keyExtractor={(item) => item._id}
                    refreshing={this.state.flatListRefreshing}
                    onRefresh={this.flatListRefresh}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.onEndReached}

                    renderItem={({ item, index }) => {
                        return (
                            <View style={[s.post, (index !== 0) ? { borderTopWidth: 1, borderColor: "#eee" } : null]}>

                                {/* Teilen, Keine Intersse, Stats - Soll beim Klick auf den Titel geöffnet werden. */}
                                <View style={s.postOptions}>
                                    <TouchableOpacity style={s.postOption}>
                                        <Image style={s.postOptionImg} source={optionsBlock} />          
                                    </TouchableOpacity>  
                                    <TouchableOpacity style={s.postOption}>
                                        <Image style={s.postOptionImg} source={optionsStats} />          
                                    </TouchableOpacity>  
                                    <TouchableOpacity style={s.postOption} onPress={() => this.sharePoll(item)}>
                                        <Image style={s.postOptionImg} source={optionsShare} />          
                                    </TouchableOpacity>  
                                </View>


                                <View style={s.pPostHeader}>

                                    {this.props.profile ?
                                        <View style={s.authorBox}>
                                            <Image style={s.pPB} source={DefaultPB} />
                                            <Text style={s.pSubtitle}>{item.author.username} {formatTime(item.createdAt)}</Text>
                                        </View>
                                        :
                                        <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER, { userObj: item.author })}>
                                            <View style={s.authorBox}>
                                                <Image style={s.pPB} source={(item.author.meta && item.author.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + item.author.meta.pb } : DefaultPB} />
                                                <Text style={s.pSubtitle}>{item.author.username} {formatTime(item.createdAt)}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }

                                    <Text style={s.pTitle}>{item.heading}</Text>
                                </View>

                                {item.text ? <Text style={s.description}>{item.text}</Text> : null}

                                {/* Media */}
                                {item.media ? <LoadMedia poll={item} /> : null}

                                {/* Umfragenteil */}
                                <View style={s.poll}>
                                    <PollTypes vote={this.props.vote} poll={item} />
                                </View>
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