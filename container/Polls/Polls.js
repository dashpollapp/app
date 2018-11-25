import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text, } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as screenNames from "../../constants/screenNames";
import style from "./PollStyle";
import PollsFlatlist from "./PollsFlatlist";
import { load_home_polls, vote } from "../../actions";

class Polls extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.load_home_polls(0);
    }

    render() {
        console.log("RERENDER IN POLLS.JS")
        return (
            <ScrollView style={style.box}>

                <View style={style.boxHeader}>
                    <TouchableOpacity>
                        <Text style={style.h1}>Beiträge:</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate(screenNames.CREATE)}>
                        <Text style={style.link}>+ Neue Umfrage</Text>
                    </TouchableOpacity>
                </View>


                <PollsFlatlist vote={this.props.vote} navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}


Polls.propTypes = {
    screenProps: PropTypes.object.isRequired,
    homePolls: PropTypes.array.isRequired
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
