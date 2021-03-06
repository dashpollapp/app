import React from "react";
import { Font, AppLoading, Asset, SplashScreen } from "expo";
import PropTypes from "prop-types";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { connect } from "react-redux";

import db from "./utils/db";
import { set_current_user, update_user_from_api } from "./actions";

import AuthNavigator from "./navigator/AuthNavigator";
import RootNavigator from "./navigator/RootNavigator";
import * as socket from "./utils/socket";

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

function cacheResourcesAsync() {
    return new Promise((resolve, reject) => {
        //const images = getAllImagePaths().map(imgPath => console.log(imgPath));
        const images = [
            //Login
            require("./assets/img/login/PWhide.png"),
            require("./assets/img/login/PWshow.png"),

            //Navbar Bottom
            require("./assets/img/navbar/bottom/chat_off.png"),
            require("./assets/img/navbar/bottom/chat.png"),
            require("./assets/img/navbar/bottom/poll_off.png"),
            require("./assets/img/navbar/bottom/poll.png"),

            //Navbar Top
            require("./assets/img/navbar/top/logo.png"),
            require("./assets/img/navbar/top/logo2.png"),
            require("./assets/img/navbar/top/back.png"),
            require("./assets/img/navbar/top/options.png"),

            //Other
            require("./assets/img/splash.png"),
            require("./assets/img/corner.png"),
            require("./assets/img/hide.png"),
            require("./assets/img/pb.jpg"),

            //Create
            require("./assets/img/create/copy.png"),

            //PollTypes
            require("./assets/img/post/polltypes/like/like_on.png"),
            require("./assets/img/post/polltypes/like/like_off.png"),

            //Posts
            require("./assets/img/post/options/block.png"),
            require("./assets/img/post/options/share.png"),
            require("./assets/img/post/options/stats.png"),

            //Erstmal 
            require("./assets/img/map.png")
        ]
        const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
        Promise.all(cacheImages)
            .then(() => resolve());
    })
}

function getUserFromDb() {
    return new Promise((resolve, reject) => {
        db.get("user")
            .then(user => {
                resolve(user)
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
            isSplashReady: false,
            isAppReady: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("RERENDER TRUE");
        if (this.state.isAppReady !== nextState.isAppReady) return true;
        if (this.state.isSplashReady !== nextState.isSplashReady) return true;
        if (!(this.props.user._id) || this.props.user._id !== nextProps.user._id) return true;
        console.log("RERENDER FALSE");
        return false;
    }

    componentDidMount() {
        //socket.connect()
        //APP Start
        Promise.all([loadFonts(), getUserFromDb(), cacheResourcesAsync()])
            .then(results => {
                const [, user] = results;

                if (user) this.props.set_current_user(user);

                this.setState({ isAppReady: true }, () => { SplashScreen.hide() })
            });
    }

    _cacheSplashResourcesAsync = async () => {
        const png = require("./assets/img/splash.png");
        return Asset.fromModule(png).downloadAsync()
    }

    render() {
        if (!this.state.isSplashReady) {
            return (
                <AppLoading
                    startAsync={this._cacheSplashResourcesAsync}
                    onFinish={() => this.setState({ isSplashReady: true })}
                    onError={console.warn}
                    autoHideSplash={false}
                />
            );
        }

        //Wird nur angezeigt, falls Promise.all länger braucht als _cacheSplashResourcesAsync, um flackern zu vermeiden
        if (!this.state.isAppReady) {

            return (
                <View style={{ flex: 1 }}>
                    <Image
                        source={require("./assets/img/splash.png")}
                    />
                </View>
            );
        }

        const isLoggedIn = this.props.user;
        return (
            <View style={styles.containerWraper}>
                {isLoggedIn
                    ? <RootNavigator />
                    : <AuthNavigator />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /*container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50 + 18,
        marginBottom: 50,
        height: Dimensions.get("window").height
    },*/
    containerWraper: {
        flex: 1
    }
});


RootApp.propTypes = {
    set_current_user: PropTypes.func.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]).isRequired
}

const mapStateToProps = state => {
    return {
        user: state.user.user
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
