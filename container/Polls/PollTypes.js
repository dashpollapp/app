import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import { LinearGradient } from 'expo';
import s from "./PollStyle";
import PropTypes from "prop-types";

class PollTypes extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let poll = this.props.poll;

        switch(poll.polltype) {

            case 10:

                return (
                    <View>
                        <Text>PollType: 10</Text>
                    </View>
                );

            case 11:

                return (
                    <View>
                        <Text>PollType: 11</Text>
                    </View>
                );

            
            case 20:

                let answers = [];

                poll.answers.forEach((answer, index) => {
                    
                    let percent = (poll.vote.votes[answer.id] / poll.vote.totalVotes) * 100 | 0

                    answers.push(
                        <TouchableOpacity key={index} >
                            <View style={s.pt1Answer}>
                                <View>
                                    <Text style={s.pollAnswerTitle}>{answer.text}</Text>
                                </View>
                                <View style={s.pt1Bar}>
                                    <LinearGradient
                                        style={[s.pt1BarInner, { width: percent + "%" }]}
                                        //colors={['#aaa', '#888']}
                                        colors={['#ae4768', '#3386cd']}
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.9, y: 0.1 }}
                                    />
                                    <Text style={s.pollPercentText}>{percent}%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                });

                return (answers);

            default:
                return <View><Text>Fehler beim laden des PollTypes</Text></View>;
        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
