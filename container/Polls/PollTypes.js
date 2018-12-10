import React, { Component, } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

//PollTypes
import Classic from "./VoteTypes/Classic";
import Like from "./VoteTypes/Like";
import Thumb from "./VoteTypes/Thumb"

class PollTypes extends Component {

    render() {

        let { poll, vote, clickable = true } = this.props;

        switch (poll.polltype) {
            case 11:
                return <Thumb vote={vote} poll={poll} clickable={clickable} />

            case 10:

                return <Like vote={vote} poll={poll} clickable={clickable} />;

            case 20:

                return <Classic vote={vote} poll={poll} clickable={clickable} />;

            default:
                return null;
        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
