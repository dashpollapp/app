import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo';

import s from "./PollStyle";

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
                    style={s.posts}
                    data={this.props.polls}
                    keyExtractor={(item, index) => index + "a" + item.heading}
                    renderItem={({ item }) => {
                        return (
                            <View style={s.post}>
                                <View style={s.pPostHeader}>
                                    <TouchableOpacity>
                                        <Image style={s.pPB} source={PbImg} />
                                    </TouchableOpacity>
                                    <View style={s.pPostHeaderText}>
                                        <Text style={s.pTitle}>{item.heading}</Text>
                                        <Text style={s.pSubtitle}>{item.author.username} {this.formatTime(item.createdAt)}</Text>
                                    </View>
                                </View>
                                <Text style={s.description}>Ich bin eine Beschreibung</Text>

                                {/* Umfragenteil */}
                                <View style={s.poll}>

                                    <TouchableOpacity>
                                        <View style={s.pt1Answer}>
                                            <View>
                                                <Text style={s.pollAnswerTitle}>Antwort A</Text>
                                            </View>
                                            <View style={s.pt1Bar}>
                                                <LinearGradient 
                                                    style={[s.pt1BarInner, {width: "50%"}]}
                                                    colors={['#aaa', '#888' ]}
                                                    start={{x: 0.0, y: 0.0}} 
                                                    end={{x: 0.9, y: 0.1}}
                                                    />
                                                <Text style={s.pollPercentText}>50%</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <View style={s.pt1Answer}>
                                            <View>
                                                <Text style={s.pollAnswerTitle}>Antwort B</Text>
                                            </View>
                                                <View style={s.pt1Bar}>
                                                    <LinearGradient 
                                                    style={[s.pt1BarInner, {width: "50%"}]}
                                                    colors={['#ae4768', '#3386cd' ]}
                                                    start={{x: 0.0, y: 0.0}} 
                                                    end={{x: 0.9, y: 0.1}}
                                                    />
                                                    <Text style={s.pollPercentText}>50%</Text>
                                                </View>
                                        </View>
                                    </TouchableOpacity>

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
