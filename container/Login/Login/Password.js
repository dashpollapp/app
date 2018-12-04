import React from "react";
import { ScrollView, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native";
import { login } from "../SignInStyle";
import D from "../../../assets/style/default"

import { connect } from "react-redux";

import { auth_login } from "../../../actions"

import * as screenNames from "../../../constants/screenNames";

//Images
import DefaultPB from "../../../assets/img/pb.png"
import KiImg from "../../../assets/img/ki.png"

class Password extends React.Component {

    _onPasswordInputChange(username, password) {
        if (password.length > 2) this.props.auth_login(username, password);
    }

    render() {
        let user = this.props.navigation.getParam("user", false);
        return (
            <KeyboardAvoidingView
            style={login.box}
            behavior="padding"
            keyboardVerticalOffset={22}
            >   
            <ScrollView style={login.scroll}>

                {/*Stäter ein Bild was immer sichtbar ist: <Image style={login.img} source={SplashImg}></Image>*/}

                <Text style={login.welcomeText}>Bitte gebe dein Passwort ein 🤫</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.LOGIN_SELECT_USER)}>
                    <View style={login.userSelected}>
                        <Image style={D.userPB} source={(user && user.meta.pb) ? {uri: "https://api.dashpoll.net/pb/" + user.meta.pb} : DefaultPB}/>
                        <Text style={D.userFullname}>{user.fullname}</Text>
                        <Text style={D.userName}>Account ändern</Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    placeholder="Passwort"
                    placeholderTextColor="#666"
                    style={login.input}
                    onChangeText={(text) => this._onPasswordInputChange(user.username, text)}
                />

                <View style={D.kiBoxes}>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Passwort vergessen</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: 64,}}></View>
            </ScrollView>
        </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {
        foundUsers: state.user_search.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth_login: (username, password) => {
            dispatch(auth_login(username, password));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
