import React, { Component, } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

//PollTypes
import Classic from './VoteTypes/Classic';
import Like from './VoteTypes/Like';
import Thumb from './VoteTypes/Thumb'

class PollTypes extends Component {

    render() {

        let poll = this.props.poll;

        switch (poll.polltype) {
            case 11:
                return <Thumb vote={this.props.vote} poll={poll} />

            case 10:

                return <Like vote={this.props.vote} poll={poll} />;

            case 20:

                return <Classic vote={this.props.vote} poll={poll} />;

            default:
                return null;
        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
