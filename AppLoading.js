import React from "react";
import { Font, AppLoading } from "expo";
import db from "./db";
import axios from "axios";
import { connect } from "react-redux";
import * as action from "./constants/actionTypes";

function loadFonts() {
    return Font.loadAsync({
        GS1: require("./assets/fonts/GoogleSans-Regular.ttf"),
        GS2: require("./assets/fonts/GoogleSans-Medium.ttf"),
        GS3: require("./assets/fonts/GoogleSans-Bold.ttf")
    });
}

function getUserFromDb() {
    return new Promise((resolve, reject) => {
        db.get("user")
            .then(user => {
                if (user) {
                    axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
                    this.props.dispatch({ type: action.SET_CURRENT_USER, payload: user });
                    sconnect();
                    this.props.navigation.navigate("Main");
                } else {
                    this.props.navigation.navigate("Login");
                }
            })
            .catch(err => {
                console.log(err);
                this.props.navigation.navigate("Login");
            });
    });
}

class InitApp extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { isReady: false };

    render() {
        return <AppLoading startAsync={this.loadFont} onFinish={() => this.continue()} onError={console.warn} />;
    }
}

export default connect()(InitApp);
