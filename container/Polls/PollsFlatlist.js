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

class PollsFlatlist extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
                <FlatList
                    style={s.posts}
                    data={this.props.polls.polls.home}
                    extraData={this.props.polls} //wird nur wegen loading geändert -> muss das noch richtig machen
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => {

                        return (
                            <View>
                                <View style={[s.post, (index !== 0) ? {borderTopWidth: 1, borderColor: "#e5e5e5"} : null]}>
                                    <View style={s.pPostHeader}>

                                        {this.props.profile ?
                                            <View style={s.authorBox}>
                                                <Image style={s.pPB} source={PbImg} />
                                                <Text style={s.pSubtitle}>{item.author.username} {formatTime(item.createdAt)}</Text>
                                            </View>
                                            :
                                            <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER)}>
                                                <View style={s.authorBox}>
                                                    <Image style={s.pPB} source={PbImg} />
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
    vote: PropTypes.func.isRequired
}

const mapStatetp = state => {
    return {
        polls: state.polls
    }
}

export default connect(mapStatetp)(PollsFlatlist);
