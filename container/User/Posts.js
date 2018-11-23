import { ScrollView } from "react-native";
import React from "react";

import style from '../Polls/PollStyle';
import PollsFlatlist from '../Polls/PollsFlatlist';


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const polls = [
            {
                _id: "5b7069ca3a100f53e49bda7c",
                author: {
                    _id: "5b09cd9312574128e4acb285",
                    username: "Max",
                    fullname: "Dashpoll"
                },
                heading: "Wenn ich mich heute für ein Social Network entscheiden müsste wäre es...",
                polltype: 20,
                answers: [
                    {
                        id: 0,
                        text: "Twitter"
                    },
                    {
                        id: 1,
                        text: "Facebook"
                    },
                    {
                        id: 2,
                        text: "Snapchat"
                    },
                    {
                        id: 3,
                        text: "Instagram"
                    },
                ],
                maxVotes: 1,
                createdAt: "2018-08-12T17:09:30.926Z",
                vote: {
                    hasVoted: false,
                    totalVotes: 12,
                    totalVoter: 12,
                    votes: {
                        "0": 6,
                        "1": 1,
                        "2": 3,
                        "3": 2
                    }
                }
            },
            {
                _id: "5b7069ca3a100f53e49bda7c",
                author: {
                    _id: "5b09cd9312574128e4acb285",
                    username: "Max",
                    fullname: "Dashpoll"
                },
                heading: "Wenn ich mich heute für ein Social Network entscheiden müsste wäre es...",
                polltype: 20,
                answers: [
                    {
                        id: 0,
                        text: "Twitter"
                    },
                    {
                        id: 1,
                        text: "Facebook"
                    },
                    {
                        id: 2,
                        text: "Snapchat"
                    },
                    {
                        id: 3,
                        text: "Instagram"
                    },
                ],
                maxVotes: 1,
                createdAt: "2018-08-12T17:09:30.926Z",
                vote: {
                    hasVoted: false,
                    totalVotes: 12,
                    totalVoter: 12,
                    votes: {
                        "0": 6,
                        "1": 1,
                        "2": 3,
                        "3": 2
                    }
                }
            }
        ]

        return (
            <ScrollView style={style.box}>
                <PollsFlatlist polls={polls} profile={true} navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default Posts;
