import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

import style from "./PollStyle";

import PbImg from "../../assets/img/pb.jpg";

class PollsFlatlist extends Component {

    /* Was hat das hier verloren? 16.11 KM*/ 
    formatTime(date) {
        if (typeof date === typeof "") {
            date = new Date(date);
        }
        current = new Date();
        currentTS = current.getTime() / 1000 | 0;
        dateTS = date.getTime() / 1000 | 0;

        console.log(currentTS - dateTS);

        let difference = currentTS - dateTS;

        if (difference < 3) return "jetzt gerade";

        if (difference < 60) {
            return "vor " + difference + "sek";
        }

        if (difference < 3600) {

            return "vor " + (difference / 60 | 0) + "min";
        }

        if (difference < 86400) {
            return "vor " + (difference / 3600 | 0) + " Stunden";
        }

        return "am " + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
            "." + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "." + date.getFullYear();


    }

    render() {
        return (
            <View>
                <FlatList
                    style={style.posts}
                    data={this.props.polls}
                    keyExtractor={(item, index) => index + "a" + item.heading}
                    renderItem={({ item }) => {
                        return (
                            <View style={style.post}>
                                <View style={style.pPostHeader}>
                                    <TouchableOpacity>
                                        <Image style={style.pPB} source={PbImg} />
                                    </TouchableOpacity>
                                    <View style={style.pPostHeaderText}>
                                        <Text style={style.pTitle}>{item.heading}</Text>
                                        <Text style={style.pSubtitle}>{item.author.username} {this.formatTime(item.createdAt)}</Text>
                                    </View>
                                </View>
                                <Text style={style.description}>Ich bin eine Beschreibung</Text>
                                <View>

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
