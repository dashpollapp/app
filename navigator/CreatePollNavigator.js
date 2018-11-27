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

//CreatePost*
class CreatePollNavigator extends React.Component {

    //Wird gebraucht, um den Focus auf SettingsNavigator zu stellen, falls man in SETTINGS ist (this.props.navigation)
    static router = Navigator.router;

    state = {
        heading: "",
        text: ""
    }

    changeValues(heading, text) {
        this.setState({ heading, text });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.haspollcreated);
        if (nextState.heading !== this.state.heading || nextState.text !== this.state.text) return false;
        return true;
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
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
