import React, { Component, } from "react";
import { View, Text, ScrollView, TouchableOpacity, } from "react-native";
import PropTypes from "prop-types";

import Description from "../../components/Description";
import Author from "../../components/Post/authorBox";

import PollTypes from "./PollTypes";

import s from "./PollStyle";

class PostStats extends Component {

    render() {
        const poll = this.props.navigation.getParam("poll", false);

        let totalVoter;
        switch(poll.polltype) {
            case 10:
                totalVoter = poll.vote.totalVotes;
                break;
            case 11:
                totalVoter = (poll.vote.likes + poll.vote.dislikes);
                break;
            case 20:
                totalVoter = poll.vote.totalVoter;
                break;
            default:
                totalVoter = "-"
        }

        return(
            <ScrollView style={s.statsPage}>

                <View style={s.stats}>
                    <View style={s.stat}>
                        <Text style={s.statAmount}>161</Text>
                        <Text style={s.statTitle}>Aufrufe</Text>
                    </View>
                    <View style={s.stat}>
                        <Text style={s.statAmount}>54</Text>
                        <Text style={s.statTitle}>Nutzer</Text>
                    </View>
                    <View style={s.stat}>
                        <Text style={s.statAmount}>{totalVoter}</Text>
                        <Text style={s.statTitle}>Abgestimmt</Text>
                    </View>
                    <View style={s.stat}>
                        <Text style={s.statAmount}>12</Text>
                        <Text style={s.statTitle}>Geteilt</Text>
                    </View>
                </View>

                {/* Umfrage einzeln öffnen?  */}
                <TouchableOpacity style={s.statsShowPost}>
                    <View style={s.pPostHeader}>
                        <Author poll={poll} navigation={this.props.navigation} />
                        <Text style={s.pTitle}>{poll.heading}</Text>
                    </View>
                    <Description style={s.description} text={poll.text}/>
                    {/* Nicht Voten!!! */}
                    <View style={s.poll}><PollTypes poll={poll} /></View>
                </TouchableOpacity> 

                {/* 

                Achtung Zotttel's Gedanken:

                => Bei Umfrage-Block's mit mehreren Antworten
                <Text style={s.statsHeading}>Verlauf:</Text>

                => Wenn es kommis gibt
                <Text style={s.statsHeading}>Kommentare:</Text>

                */}


            </ScrollView>
        )
    }
}

export default PostStats;
