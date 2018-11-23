import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

import s from "./PollStyle";

import * as screenNames from '../../constants/screenNames';

import formatTime from '../../utils/formatTime';

import PbImg from "../../assets/img/pb.png";
import TestImg from "../../assets/img/post/test.png";

import PollTypes from "./PollTypes";

class PollsFlatlist extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <FlatList
                    style={s.posts}
                    data={this.props.polls}
                    keyExtractor={(item, index) => index + "a" + item.heading}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={s.post}>
                                    <View style={s.pPostHeader}>
                                        <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER)}>
                                            <View style={s.authorBox}>
                                                <Image style={s.pPB} source={PbImg} />
                                                <Text style={s.pSubtitle}>{item.author.username} {formatTime(item.createdAt)}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={s.pTitle}>{item.heading}</Text>
                                    </View>

                                    <Text style={s.description}>[Beschreibung?]</Text>
                                    <Image style={s.image} source={TestImg}/>

                                    {/* Umfragenteil */}
                                    <View style={s.poll}>
                                        <PollTypes poll={item} />
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
    polls: PropTypes.array.isRequired,
}

export default PollsFlatlist;
