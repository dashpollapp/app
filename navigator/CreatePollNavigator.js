import { createMaterialTopTabNavigator } from "react-navigation";
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {create_poll} from '../actions';
import CreateAfter from "../container/Create/CreateAfter";
import CreatePage from "../container/Create/CreatePage";
import BlockSelection from "../container/Create/BlockSelection";
import * as screenName from "../constants/screenNames";
import NavbarTopBack from "../components/Navbar/NavbarTopBack";
import NavbarBottomText from "../components/Navbar/NavbarBottomText";

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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavbarTopBack title="Beitrag erstellen" navigation={this.props.navigation} />
                {(this.props.haspollcreated) ? 
                <CreateAfter navigation={this.props.navigation} />
                :
                <View style={{flex: 1}}>
                    <Navigator navigation={this.props.navigation} />
                    <NavbarBottomText text="Erstellen" onPress={() => this.props.create_poll(this.props.haspollcreated)} navigation={this.props.navigation} />
                </View>
                }
            </View>
        )
    }
}

CreatePollNavigator.propTypes = {
    navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        haspollcreated: state.create_poll.poll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create_poll: poll => {
            dispatch(create_poll(poll))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollNavigator);
