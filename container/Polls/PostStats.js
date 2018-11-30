import React, { Component, } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class PostStats extends Component {

    render() {
        const poll = this.props.navigation.getParam("poll", false);
        console.log(poll)
        return(
            <View>

            </View>
        )
    }
}

export default PostStats;
