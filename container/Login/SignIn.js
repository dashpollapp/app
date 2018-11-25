import React from "react";
import { StatusBar, FlatList, Text, View, Alert, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { user_search, auth_login } from "../../actions";
import { login, pc, css } from "./SignInStyle";
import * as screenNames from "../../constants/screenNames";

import NavTopWithoutIcons from "../../components/Navbar/NavTopWithoutIcons"

//Images
import pwShow from "../../assets/img/login/PWshow.png";
import pwHide from "../../assets/img/login/PWhide.png";
import corner from "../../assets/img/corner.png";

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


    _onUserInputChange(search) {
        if (search.length > 0) this.props.user_search(search)
    }

    _onPasswordInputChange(password) {
        if (password.length > 2) this.props.auth_login(this.state.markered, password);
    }


    render() {
        return (
            <View style={css.out}>
                <View style={css.navTopHelp} />


                {/*=Navbar top*/}
                <NavTopWithoutIcons />


                <View style={css.body}>
                    <StatusBar hidden={false} style={[{ backgroundColor: "#ffffff" }]} barStyle="dark-content" />
                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="-420">
                        <View hidden={true} style={login.body}>

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
                                                    <Image style={login.PasswordInputToggleImg} source={pwShow} />
                                                ) : (
                                                        <Image style={login.PasswordInputToggleImg} source={pwHide} />
                                                    )}
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }

                            <View style={css.navTopPush} />
                        </View>
                    </KeyboardAvoidingView>

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

                <Image style={[css.cornerTL, css.corner]} source={corner} />
                <Image style={[css.cornerTR, css.corner]} source={corner} />
                <Image style={[css.cornerBL, css.corner]} source={corner} />
                <Image style={[css.cornerBR, css.corner]} source={corner} />
            </View>
        );
    }
}

Login.propTypes = {
    user_search: PropTypes.func.isRequired,
    auth_login: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    foundUsers: PropTypes.array.isRequired,
}


const mapStateToProps = state => {
    return {
        foundUsers: state.user_search.users,
        loadingUsers: state.user_search.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        user_search: username => {
            dispatch(user_search(username));
        },
        auth_login: (username, password) => {
            dispatch(auth_login(username, password))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
