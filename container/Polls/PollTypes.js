import React, { Component, } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

//PollTypes
import Classic from './VoteTypes/Classic';
import Like from './VoteTypes/Like';

class PollTypes extends Component {
    
    render() {

        let poll = this.props.poll;
 
        switch(poll.polltype) {
            case 11:
                return (
                    <View>
                        <Text>PollType: 11</Text>
                    </View>
                );

            case 10:

                return <Like poll={poll} />;

            case 20:

                return <Classic poll={poll} />;

            default:
                return null;
        }
    }
}

PollTypes.propTypes = {
    poll: PropTypes.object.isRequired,
}

export default PollTypes;
