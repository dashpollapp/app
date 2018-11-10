import React from "react";
import { StatusBar, FlatList, Text, View, Alert, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import axios from "axios";
import { login, pc, css } from "./SignInStyle";
import { connect } from "react-redux";
import db from "../../utils/db";
import * as screenNames from "../../constants/screenNames";
import { user_search, auth_login, set_current_user } from "../../actions";

const pwShow = "../../assets/img/login/PWshow.png",
    pwHide = "../../assets/img/login/PWhide.png";

const corner = "../../assets/img/corner.png";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordImg: true,
            markered: "",
            password: "",
            search: "",
        };

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    componentWillReceiveProps() {

    }

    componentDidUpdate() {
        console.log("CWRP");
        if (this.props.userLoggedIn) {
            this.props.set_current_user(this.props.userLoggedIn);
        }
    }


    _onUserInputChange(search) {
        this.props.user_search(search)
    }

    _onPasswordInputChange(password) {
        this.props.auth_login(this.state.markered, password);
        /*axios
            .post("https://api.dashpoll.net/login", {
                username: this.state.markered,
                password
            })
            .then(res => {
                const response = res.data;
                if (response.status === "SUCCESSFULLY_LOGGED_IN") {
                    console.log("LOGGED IN");
                    db.put(
                        {
                            _id: "user",
                            ...response.user,
                            token: response.token
                        },
                        { force: true }
                    )
                        .then(() => {
                            axios.defaults.headers.common["Authorization"] = "Bearer " + response.token;
                            this.props.dispatch({
                                type: "updateUser",
                                payload: response.user
                            });
                            //sconnect();
                            this.props.navigation.navigate(screenNames.MAIN);
                        })
                        .catch(err => console.error(err));
                }
            })
            .catch(err => { });*/
    }


    render() {
        return (
            <View style={css.out}>
                <View style={css.navTopHelp} />

                <View style={css.body}>
                    <StatusBar hidden={false} style={[{ backgroundColor: "#ffffff" }]} barStyle="dark-content" />
                    <KeyboardAvoidingView behavior="padding">
                        <View hidden={true} style={login.body}>
                            <View style={css.navTopPush} />

                            <Text style={login.Text}>Suche deinen Account</Text>
                            <TextInput
                                underlineColorAndroid={"transparent"}
                                style={login.Input}
                                placeholder={"Account Suchen"}
                                onChangeText={text => this._onUserInputChange(text)}
                                ref={input => {
                                    this.inputs["two"] = input;
                                }}
                                onSubmitEditing={() => {
                                    this.focusNextField("two");
                                }}
                            />

                            <FlatList
                                data={this.props.foundUsers}
                                extraData={this.state}
                                style={login.foundUsers}
                                ref={ref => {
                                    this.flatListRef = ref;
                                }}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(x, i) => i.toString()}
                                horizontal={true}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.state.markered === item.username
                                                        ? this.setState({ markered: "" }) &
                                                        this.flatListRef.scrollToIndex({
                                                            animated: true,
                                                            index: 0
                                                        })
                                                        : this.setState({ markered: item.username }) &
                                                        this.flatListRef.scrollToIndex({
                                                            animated: true,
                                                            index: index > 0 ? index - 0.2 : index
                                                        });
                                                }}
                                            >
                                                <View
                                                    style={[
                                                        login.foundUser,
                                                        this.state.markered === item.username
                                                            ? login.foundUserSelected
                                                            : null
                                                    ]}
                                                >
                                                    <Image
                                                        style={login.foundPB}
                                                        source={{
                                                            uri:
                                                                "https://pbs.twimg.com/profile_images/830204661474979841/qsnoO3lJ_400x400.jpg"
                                                        }}
                                                    />
                                                    <Text style={login.foundUsernameText}>
                                                        @{item.username}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                            />

                            {/* Geht nicht anders Weil drüber ein maxHeight ist */}
                            <View style={login.space} />

                            {
                                this.state.markered === "" ? null : (
                                    <View>
                                        <Text style={login.Text}>Gebe dein Passwort ein</Text>

                                        <View style={login.PasswordInputBox}>
                                            <TextInput
                                                underlineColorAndroid={"transparent"}
                                                style={login.PasswordInput}
                                                placeholder={"Passwort"}
                                                secureTextEntry={this.state.passwordImg}
                                                onChangeText={pw => this._onPasswordInputChange(pw)}
                                                ref={input => {
                                                    this.inputs["two"] = input;
                                                }}
                                            />
                                            <TouchableOpacity
                                                style={login.PasswordInputToggle}
                                                onPress={() => {
                                                    this.setState({ passwordImg: !this.state.passwordImg });
                                                }}
                                            >
                                                {this.state.passwordImg ? (
                                                    <Image style={login.PasswordInputToggleImg} source={require(pwShow)} />
                                                ) : (
                                                        <Image style={login.PasswordInputToggleImg} source={require(pwHide)} />
                                                    )}
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }

                            <View style={css.navTopPush} />
                        </View>
                    </KeyboardAvoidingView>

                    {/*=Navbar top*/}
                    {/* linear-Gradient border radius bug:   colors={['#e8f5f7', '#edf7f1']} start={[0, 1]} end={[1, 1]}*/}
                    <LinearGradient
                        style={css.navTop}
                        colors={["rgba(255, 255, 255, 0.98)", "rgba(255, 255, 255, 0.98)"]}
                        start={[0, 1]}
                        end={[1, 1]}
                    >
                        <View style={css.navTopCenter}>
                            {/*<Text style={css.windowTitle}>Umrafge erstellen</Text>*/}
                            <Image style={css.logo} source={require("../../assets/img/navbar/top/logo2.png")} />
                        </View>
                    </LinearGradient>

                    {/*=Navbar unten*/}
                    <View style={css.bottom}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("GIBT KEINE HILFE DU HUND");
                            }}
                        >
                            <Text style={pc.textContinue}>Hilfe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.SIGN_UP)}>
                            <Text style={pc.textPublic}>Account erstellen</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image style={[css.cornerTL, css.corner]} source={require(corner)} />
                <Image style={[css.cornerTR, css.corner]} source={require(corner)} />

                <Image style={[css.cornerBL, css.corner]} source={require(corner)} />
                <Image style={[css.cornerBR, css.corner]} source={require(corner)} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        foundUsers: state.user_search.users,
        loadingUsers: state.user_search.loading,
        userLoggedIn: state.auth_login.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        user_search: username => {
            dispatch(user_search(username));
        },
        auth_login: (username, password) => {
            dispatch(auth_login(username, password))
        },
        set_current_user: user => {
            dispatch(set_current_user(user));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
