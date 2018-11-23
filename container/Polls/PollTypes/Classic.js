import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

import s from "../../Polls/PollStyle";

export default class ClassicType extends React.Component {

    render() {

        let poll = this.props.poll;

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
    }
}