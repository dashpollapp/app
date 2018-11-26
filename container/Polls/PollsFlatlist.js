import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import s from "./PollStyle";

import * as screenNames from '../../constants/screenNames';

import formatTime from '../../utils/formatTime';

import PbImg from "../../assets/img/pb.png";


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

    render() {
        return (
            <View>
                <FlatList
                    style={s.posts}
                    data={this.props.polls.polls.home}
                    extraData={this.props.polls} //wird nur wegen loading geändert -> muss das noch richtig machen
                    ListEmptyComponent={<Text style={s.pTitle}>Noch keine Polls.</Text>}
                    keyExtractor={(item) => item._id}
                    refreshing={this.state.flatListRefreshing}
                    onRefresh={this.flatListRefresh}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.onEndReached}

                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View style={[s.post, (index !== 0) ? { borderTopWidth: 1, borderColor: "#e5e5e5" } : null]}>
                                    <View style={s.pPostHeader}>

                                        {this.props.profile ?
                                            <View style={s.authorBox}>
                                                <Image style={s.pPB} source={PbImg} />
                                                <Text style={s.pSubtitle}>{item.author.username} {formatTime(item.createdAt)}</Text>
                                            </View>
                                            :
                                            <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER, { userObj: item.author })}>
                                                <View style={s.authorBox}>
                                                    <Image style={s.pPB} source={(item.author.meta && item.author.meta.pb) ? { uri: "https://api.dashpoll.net/pb/" + item.author.meta.pb } : PbImg} />
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