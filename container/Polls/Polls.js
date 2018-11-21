import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text, } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as screenNames from "../../constants/screenNames";
import style from "./PollStyle";
import PollsFlatlist from "./PollsFlatlist";

class Polls extends Component {
    constructor(props) {
        super(props)
        console.log(props.polls)
    }

    render() {
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


                <PollsFlatlist polls={this.props.polls}/>
            </ScrollView>
        );
    }
}


Polls.propTypes = {
    screenProps: PropTypes.object.isRequired,
    polls: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        polls: state.polls.polls
    }
}

export default connect(mapStateToProps)(Polls);
