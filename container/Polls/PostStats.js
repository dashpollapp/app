import React, { Component, } from "react";
import { View, Text, ScrollView, TouchableOpacity, } from "react-native";
import PropTypes from "prop-types";

import Description from "../../components/Description";
import Author from "../../components/Post/authorBox";

import s from "./PollStyle";

class PostStats extends Component {

    render() {
        const poll = this.props.navigation.getParam("poll", false);
        console.log(poll)
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
                        <Text style={s.statAmount}>28</Text>
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
                        <Author poll={item} navigation={this.props.navigation} />
                        <Text style={s.pTitle}>Ich bin eine tolle Umfrgae</Text>
                    </View>
                    <Description style={s.description} text={"Jaja!"}/>
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

const item = {
    "_id": "5b6c6c4e6b96613764e596dd",
    "author": {
      "_id": "5b09cd9312574128e4acb285",
      "username": "max",
      "fullname": "Max Baier"
    },
    "heading": "Welche Handy Marke?",
    "polltype": 20,
    "answers": [
      {
        "id": 0,
        "text": "Apple"
      },
      {
        "id": 1,
        "text": "Samsung"
      },
      {
        "id": 2,
        "text": "Huawei"
      }
    ],
    "createdAt": "2018-08-09T16:31:10.091Z",
    "maxVotes": 2,
    "vote": {
      "hasVoted": false,
      "totalVotes": 10,
      "totalVoter": 6,
      "votes": {
        "0": 4,
        "1": 4,
        "2": 2
      }
    }
  }

export default PostStats;
