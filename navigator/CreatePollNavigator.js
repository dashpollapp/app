import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { create_poll } from "../actions";
import * as screenName from "../constants/screenNames";

//Components
import NavbarTopBack from "../components/Navbar/NavbarTopBack";
import NavbarBottomText from "../components/Navbar/NavbarBottomText";

//Container
import CreatePage from "../container/Create/CreatePage";
import CreateAfter from "../container/Create/CreateAfter";
import BlockSelection from "../container/Create/BlockSelection";

const Navigator = createMaterialTopTabNavigator(
    {
        [screenName.CREATEPOLL]: CreatePage,
        [screenName.POLLTYPES]: BlockSelection
    },
    {
        headerMode: "none",
        initialRouteName: screenName.CREATEPOLL,
        swipeEnabled: true,
        tabBarComponent: () => null

    }
);

//CreatePost* !!!
class CreatePollNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    state = {
        heading: "",
        text: "",
        answers: []
    }

    changeValues(heading, text, answers = false) {
        let changes = {};
        if (heading) changes.heading = heading;
        if (text) changes.text = text;
        if (answers) changes.answers = answers;
        this.setState(Object.assign(this.state, changes));
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.heading !== this.state.heading
            || nextState.text !== this.state.text
            || !(nextState.answers.equals(this.state.answers))

        ) return false;
        return true;
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff", }}>
                <NavbarTopBack title="Beitrag erstellen" navigation={this.props.navigation} />
                {(this.props.haspollcreated) ?
                    <CreateAfter iliUrl={this.props.haspollcreated.iliUrl} navigation={this.props.navigation} />
                    :
                    <View style={{ flex: 1 }}>
                        <Navigator screenProps={this.changeValues.bind(this)} navigation={this.props.navigation} />
                        <NavbarBottomText text="Erstellen" onPress={() => this.props.create_poll({ polltype: this.props.polltype, ...this.state }, this.props.user)} navigation={this.props.navigation} />
                    </View>
                }
            </View>
        )
    }
}

CreatePollNavigator.propTypes = {
    navigation: PropTypes.object.isRequired,
    create_poll: PropTypes.func.isRequired,
    haspollcreated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    polltype: PropTypes.number,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        haspollcreated: state.create_poll.poll,
        polltype: state.create_poll.polltype,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create_poll: (poll, user) => {
            dispatch(create_poll(poll, user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollNavigator);


//https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });