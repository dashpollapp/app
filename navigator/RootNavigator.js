import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import screenName from "../constants/screenNames";

//Navigators
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import CreatePollNavigator from "./CreatePollNavigator"
import SettingsNavigator from "./SettingsNavigator";
import SearchNavigator from "./SearchNavigator";
import ProfileNavigator from "./ProfileNavigator";
import PostFilterNavigator from "./PostFilterNavigator";
import PollStatsNavigator from "./PollStatsNavigator";
import DelevoperNavigator from "./DelevoperNavigator";
import ReportPostNavigator from "./ReportPostNavigator";
import Finish from "../container/Login/Register/Finish";

function RootNavigator(props) {

    const { initialRouteName } = props;

    let Nav = createStackNavigator(
        {
            [screenName.HOME]: HomeNavigator,
            [screenName.USER]: UserNavigator,
            [screenName.CREATE]: CreatePollNavigator,
            [screenName.SETTINGS]: SettingsNavigator,
            [screenName.SEARCH]: SearchNavigator, //wieso kein screen, luca?
            [screenName.PROFILE]: ProfileNavigator,
            [screenName.POLLSTATS]: PollStatsNavigator, //wieso kein screen, luca?
            [screenName.POSTFILTER]: PostFilterNavigator, //wieso kein screen, luca?
            [screenName.DEVELOPER]: DelevoperNavigator, //wieso kein screen, luca?
            [screenName.POSTREPORT]: ReportPostNavigator, //wieso kein screen, luca?
            "FINISH": Finish
        },
        {
            initialRouteName,
            headerMode: "none"
        }
    );

    return <Nav />
}

class RootNavigatorClass extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootNavigator initialRouteName={this.props.isRegistered ? "FINISH" : screenName.HOME} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        isRegistered: !!state.register.registeredUser
    }
}

export default connect(mapStateToProps)(RootNavigatorClass)


