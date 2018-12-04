import React from "react";
import { ScrollView, StatusBar, FlatList, Text, View, Alert, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { user_search, auth_login } from "../../actions";
import { login } from "./SignInStyle";
import D from "../../assets/style/default"
import * as screenNames from "../../constants/screenNames";

import NavTopWithoutIcons from "../../components/Navbar/NavTopWithoutIcons"

//Images
import pwShow from "../../assets/img/login/PWshow.png";
import pwHide from "../../assets/img/login/PWhide.png";
import corner from "../../assets/img/corner.png";
import DefaultPB from "../../assets/img/pb.png"
import KiImg from "../../assets/img/ki.png"
import SplashImg from "../../assets/img/splash.png"

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
        <KeyboardAvoidingView
            style={login.box}
            behavior="padding"
            keyboardVerticalOffset={22}
            >   
            <ScrollView style={login.scroll}>

                {/*Stäter ein Bild was immer sichtbar ist: <Image style={login.img} source={SplashImg}></Image>*/}

                <Text style={login.welcomeText}>Hast du einen Dashpoll Account? 🤔</Text>

                <View style={login.loginOrRegister}>
                    <TouchableOpacity style={login.button}>
                        <Text style={login.buttonText}>Ja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={login.button}>
                        <Text style={login.buttonText}>Nein</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={login.welcomeText}>Wie heißt dein Dashpoll Account 😄</Text>
                </TouchableOpacity>
                
                <TextInput
                    placeholder="Dashpoll-Name"
                    placeholderTextColor="#666"
                    style={login.input}
                    onChangeText={(text) => this.setState({markered: text})}
                />


                <View style={D.users}>
                    <TouchableOpacity>
                        <View style={[D.user_saves, D.user]}>
                            <Image style={D.userPB} source={DefaultPB}/>
                            <Text style={D.userFullname}>Max Baier</Text>
                            <Text style={D.userName}>@max</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={D.user}>
                            <Image style={D.userPB} source={DefaultPB}/>
                            <Text style={D.userFullname}>Max Baier</Text>
                            <Text style={D.userName}>@max</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                

                <View style={D.kiBoxes}>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Name vergessen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Acctount erstellen</Text>
                    </TouchableOpacity>
                </View>

                <Text style={login.welcomeText}>Bitte gebe dein Passwort ein 🤫</Text>

                <TouchableOpacity>
                    <View style={login.userSelected}>
                        <Image style={login.userPB} source={DefaultPB}/>
                        <Text style={login.userFullname}>Konrad Mayer</Text>
                        <Text style={login.userName}>Account ändern</Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    placeholder="Passwort"
                    placeholderTextColor="#666"
                    style={login.input}
                    onChangeText={(text) => this._onPasswordInputChange(text)}
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
        )
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
