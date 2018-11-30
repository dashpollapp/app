import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

//Functions
import sharePoll from '../../utils/share';

import { connect } from 'react-redux';

import * as screenNames from '../../constants/screenNames';

//Images
import optionsBlock from "../../assets/img/post/options/block.png"
import optionsStats from "../../assets/img/post/options/stats.png"
import optionsShare from "../../assets/img/post/options/share.png"

const Option = (props) => {

    const poll = props.poll;

    return (
        <View style={css.postOptions}>
            <TouchableOpacity style={css.postOption}>
                <Image style={css.postOptionImg} source={optionsBlock} />          
            </TouchableOpacity>  
            <TouchableOpacity style={css.postOption} onPress={() => props.navigation.push(screenNames.POLLSTATS, {poll})}>
                <Image style={css.postOptionImg} source={optionsStats} />          
            </TouchableOpacity>  
            <TouchableOpacity style={css.postOption} onPress={() => sharePoll(poll)}>
                <Image style={css.postOptionImg} source={optionsShare} />          
            </TouchableOpacity>  
        </View>
    );
}

const css = StyleSheet.create({
    postOptions: {
        flexDirection: "row",
        marginBottom: 4,
    },
    postOption: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.05)",
        alignItems: "center",
        marginHorizontal: 4,
        borderRadius: 12,
        padding: 8,
    },
    postOptionImg: {
        height: 24,
        width: 24,
        opacity: 0.5,
    },
})

export default connect()(Option);