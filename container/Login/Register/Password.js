import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Image } from "react-native";

import { reg } from "./Style"
import D from "../../../assets/style/default"
import KiImg from "../../../assets/img/ki.png"

import screenNames from "../../../constants/screenNames";
import { check_password, auth_register } from "../../../actions";
import { connect } from "react-redux";

class Password extends React.Component {

    state = {
        password: "",
        repeatPassword: ""
    }

    next = () => {
        if (this.props.password.isValid &&
            this.state.password === this.state.repeatPassword) {
            this.props.auth_register(this.props.user);
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={reg.box}>

                <Text style={reg.subTitle}>Sicherheit</Text>



                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Passwort</Text>
                    <TextInput
                        placeholder="Passwort eingeben"
                        style={reg.input}
                        secureTextEntry={true}
                        onEndEditing={() => this.props.check_password(this.state.password)}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                    {!this.props.password.isValid ? <Text style={reg.error}>{this.props.password.msg}</Text> : null}
                </View>


                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Passwort widerholen</Text>
                    <TextInput
                        placeholder="Passwort wiederholt eingeben"
                        style={reg.input}
                        onChangeText={repeatPassword => this.setState({ repeatPassword })}
                        secureTextEntry={true}
                        value={this.state.repeatPassword}
                    />

                    {this.state.password != this.state.repeatPassword && this.state.repeatPassword !== "" ? <Text style={reg.error}>Die Paswörter sind nicht identisch</Text> : null}
                </View>




                <View style={[D.kiBoxes, { flex: 1, }]}>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg} />
                        <Text style={D.kiText}>Sicherheithalber wiederholen?</Text>
                    </TouchableOpacity>

                </View>


                <TouchableOpacity onPress={this.next} >
                    <Text style={reg.nextText}>Weiter</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {
        password: state.register.errors.password,
        registeredUser: state.register.registeredUser,
        user: state.register.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check_password: password => {
            dispatch(check_password(password))
        },
        auth_register: user => {
            dispatch(auth_register(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
