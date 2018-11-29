import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList, Share } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import s from "./PollStyle";

import * as screenNames from '../../constants/screenNames';

import Option from '../../components/Post/Option';
import Author from '../../components/Post/authorBox';

import PollTypes from "./PollTypes";
import LoadMedia from './LoadMedia';
import { load_home_polls, vote } from "../../actions";
class PollsFlatlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: "",
            flatListRefreshing: false
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

                                {(this.state.options === item._id) ? <Option poll={item} /> : null}

                                <View style={s.pPostHeader}>

                                    <Author poll={item} navigation={this.props.navigation} />

                                    <TouchableOpacity onPress={() => (this.state.options === item._id) ? this.setState({options: ""}) : this.setState({options: item._id})}>
                                        <Text style={s.pTitle}>{item.heading}</Text>
                                    </TouchableOpacity>

                                </View>

                                {item.text ? <Text style={s.description}>{item.text}</Text> : null}

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