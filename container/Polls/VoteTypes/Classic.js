import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from "prop-types";

import s from "../../Polls/PollStyle";

export default class ClassicType extends React.Component {

    render() {

        let poll = this.props.poll;

        let answers = [];

        poll.answers.forEach((answer, index) => {

            let percent;
            if (poll.maxVotes === 1) {

                //Anhand der Votes gehen
                percent = poll.vote.votes[answer.id] / poll.vote.totalVotes * 100 | 0;
            } else {
                //Anhand der Voter gehen
                percent = poll.vote.votes[answer.id] / poll.vote.totalVoter * 100 | 0;
            }
            if (isNaN(percent)) percent = 0;


            let votedForThisAnswer = false;
            if (Array.isArray(poll.vote.hasVoted)) {
                if (poll.vote.hasVoted.includes(answer.id)) votedForThisAnswer = true;
            } /*
                falls maxVotes = 1 && integer aber erstmal egal weil es ist immer ein array

                else if(Number.isInteger(poll.vote.hasVoted)) {
                if(poll.vote.hasVoted === answer.id) votedForThis = true;
            }*/

            answers.push(
                <TouchableWithoutFeedback disabled={!this.props.clickable} key={index} onPress={() => this.props.vote("", poll, answer.id)}>
                    <View style={s.pt1Answer}>
                        <View>
                            <Text style={s.pollAnswerTitle}>{answer.text}</Text>
                        </View>
                        <View style={s.pt1Bar}>
                            <LinearGradient
                                style={[s.pt1BarInner, { width: percent + "%" }]}
                                colors={votedForThisAnswer ? ['#ae4768', '#3386cd'] : ['#aaa', '#888']}
                                //colors={['#aaa', '#888']}
                                //colors={['#ae4768', '#3386cd']}
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 0.9, y: 0.1 }}
                            />
                            <Text style={s.pollPercentText}>{percent}%</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )

        });

        return (answers);
    }
}

ClassicType.propTypes = {
    poll: PropTypes.object.isRequired
}