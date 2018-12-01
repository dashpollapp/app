import React, { Component } from "react";
import { View, Modal, TouchableOpacity, ScrollView, Text, } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as screenNames from "../../constants/screenNames";
import style from "./PollStyle";
import PollsFlatlist from "./PollsFlatlist";
import { load_home_polls, vote, update_user_from_api } from "../../actions";

class Polls extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.update_user_from_api();
        this.props.load_home_polls(0);
    }

    render() {
        console.log("RERENDER IN POLLS.JS")
        return (
            <View style={style.box}>
                <PollsFlatlist vote={this.props.vote} navigation={this.props.navigation} />
            </View>
        );
    }
}


Polls.propTypes = {
    screenProps: PropTypes.object.isRequired,
    homePolls: PropTypes.array.isRequired,
    vote: PropTypes.func.isRequired,
    load_home_polls: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        homePolls: state.polls.polls.home
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load_home_polls: skip => {
            dispatch(load_home_polls(skip))
        },
        vote: (initiator, poll, choice) => {
            dispatch(vote("home", poll, choice))
        },
        update_user_from_api: () => {
            dispatch(update_user_from_api());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
