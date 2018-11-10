import React from "react";
import { Font } from "expo";
import db from "./utils/db";
import axios from "axios";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import * as action from "./constants/actionTypes";
import * as screenNames from "./constants/screenNames";
import { set_current_user } from "./actions";

import LoginNavigator from "./navigator/LoginNavigator";
import RootNavigator from "./navigator/RootNavigator";

function loadFonts() {
    return Font.loadAsync({
        GS1: require("./assets/fonts/GoogleSans-Regular.ttf"),
        GS2: require("./assets/fonts/GoogleSans-Medium.ttf"),
        GS3: require("./assets/fonts/GoogleSans-Bold.ttf"),
        Poppins100: require("./assets/fonts/GoogleSans-Regular.ttf"),
        Poppins200: require("./assets/fonts/GoogleSans-Regular.ttf"),
        Poppins300: require("./assets/fonts/GoogleSans-Regular.ttf"),
        Poppins400: require("./assets/fonts/GoogleSans-Regular.ttf"),
        Poppins500: require("./assets/fonts/GoogleSans-Medium.ttf"),
        Poppins600: require("./assets/fonts/GoogleSans-Bold.ttf"),
        Poppins700: require("./assets/fonts/GoogleSans-Bold.ttf"),
        Poppins800: require("./assets/fonts/GoogleSans-Bold.ttf"),
        Poppins900: require("./assets/fonts/GoogleSans-Bold.ttf")
    });
}

function getUserFromDb() {
    return new Promise((resolve, reject) => {
        db.get("user")
            .then(user => {
                //console.log(user);
                resolve(user);
            })
            .catch(err => {

                resolve(false);
            });
    });
}

class RootApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        //APP Start
        Promise.all([loadFonts(), getUserFromDb()])
            .then(results => {
                const [, user] = results;

                console.log(user);
                if (user) this.props.set_current_user(user);

                this.setState({ isLoading: false })
            });
    }

    render() {
        const isLoggedIn = this.props.user;
        if (this.state.isLoading) return (<View><Text style={{ textAlign: "center", fontSize: 18, marginTop: 100 }}>App startet...</Text></View>);
        return (
            <View style={styles.containerWraper}>
                {isLoggedIn
                    ? <RootNavigator />
                    : <LoginNavigator />
                }

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50 + 18,
        marginBottom: 50,
        height: Dimensions.get("window").height
    },
    containerWraper: {
        flex: 1
    }
});


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        set_current_user: user => {
            dispatch(set_current_user(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
