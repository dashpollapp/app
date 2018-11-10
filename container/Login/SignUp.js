import React from "react";
import { StatusBar, Text, View, ScrollView, TextInput, Image, Alert, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import db from "../../utils/db";

// Stylesheets
import { login, loader, cc, profile, pc, css } from "./SignUpStyle";
import { connect } from "react-redux";
import axios from "axios";
import * as screenNames from "../../constants/screenNames";

// Images
const pwShow = "../../assets/img/login/PWshow.png", // Password Show Image
    pwHide = "../../assets/img/login/PWhide.png"; // Password Hide Image

const corner = "../../assets/img/corner.png"; // Corner Image

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordImg: true,
            username: "",
            fullname: "",
            password: "",
            inviteCode: ""
        };

        db.allDocs({}).then(doc => console.log(doc));

        this.focusNextField = this.focusNextField.bind(this);
        this._register = this._register.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    _register() {
        const { username, fullname, inviteCode, password } = this.state;
        console.log(username);
        axios
            .post("https://api.dashpoll.net/user", { username, fullname, inviteCode, password })
            .then(res => {
                const response = res.data;
                if (response.status === "ok") {
                    axios.defaults.headers.common["Authorization"] = "Bearer " + response.token;
                    this.props.dispatch({ type: "updateUser", payload: response.user });
                }
            })
            .catch(err => {
                console.log(err.response);
                Alert.alert(JSON.stringify(err.response.data));
            });
    }

    render() {
        return (
            <View style={css.out} behavior="padding">
                <View style={css.navTopHelp} />
                <View style={css.body}>
                    <StatusBar hidden={false} style={[{ backgroundColor: "#ffffff" }]} barStyle="dark-content" />

                    <KeyboardAvoidingView style={[{ backgroundColor: "transparent" }]} behavior="padding">
                        <ScrollView style={login.body}>
                            <View style={css.navTopPush} />

                            <Text style={login.RegisterAlphaHeadingText}>Dies ist eine Alpha-Testversion</Text>
                            <Text style={login.RegisterAlphaText}>Du benötigst eine Einladung um dich zum Registrieren.</Text>

                            <Text style={login.Text}>Benutzername</Text>
                            <TextInput
                                onChangeText={username => this.setState({ username })}
                                underlineColorAndroid={"transparent"}
                                style={login.Input}
                                placeholder={"Beispiel: @hans.berg"}
                            />

                            <Text style={login.Text}>Vollständiger Name</Text>
                            <TextInput
                                onChangeText={fullname => this.setState({ fullname })}
                                underlineColorAndroid={"transparent"}
                                style={login.Input}
                                placeholder={"Beispiel: Hans Berger"}
                            />

                            <Text style={login.TextError}>Einladungscode</Text>
                            <Text style={login.TextErrorDescription}>Der Einladungscode "1234-1234-1234-1234" ist ungültig.</Text>
                            <TextInput
                                onChangeText={inviteCode => this.setState({ inviteCode })}
                                underlineColorAndroid={"transparent"}
                                style={login.Input}
                                placeholder={"siehe Einladung"}
                            />

                            <Text style={login.Text}>Passwort</Text>

                            <View style={login.PasswordInputBox}>
                                <TextInput
                                    onChangeText={password => this.setState({ password })}
                                    underlineColorAndroid={"transparent"}
                                    style={login.PasswordInput}
                                    placeholder={"Beispiel: MOfiHM_1997"}
                                    secureTextEntry={this.state.passwordImg}
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

                            <Text style={login.agbText}>
                                Mit der Registrierung stimmst du automatisch unser{" "}
                                <Text style={login.agbTextHref}>Allgemeinen Nutzungsbedindungen</Text> zu.
                            </Text>
                            <TouchableOpacity onPress={this._register} style={[{ marginTop: 12 }]}>
                                <View style={[{ overflow: "hidden", borderRadius: 12 }]}>
                                    {/*Bereit: colors={['#ce6b7f', '#3b85db']}    EIngabe noch nicht fertig: colors={['#edcbd2', '#adcff7']} */}
                                    <LinearGradient
                                        style={login.button}
                                        borderRadius={12}
                                        colors={["#edcbd2", "#adcff7"]}
                                        start={[0, 1]}
                                        end={[1, 1]}
                                    >
                                        <Text style={login.buttonText}>Registrieren</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>

                            <View style={css.navTopPush} />
                            <View style={css.navTopPush} />
                        </ScrollView>
                    </KeyboardAvoidingView>

                    {/*=Navbar top*/}
                    {/* linear-Gradient border radius bug:   colors={['#e8f5f7', '#edf7f1']} start={[0, 1]} end={[1, 1]}*/}

                    <LinearGradient
                        style={[css.navTop]}
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
                        <TouchableOpacity>
                            <Text style={pc.textContinue}>Hilfe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate(screenNames.SIGN_IN);
                            }}
                        >
                            <Text style={pc.textPublic}>Bereits Registriert?</Text>
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

export default connect()(Register);
