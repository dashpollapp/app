import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";

import { reg } from "./Style"

import screenNames from "../../../constants/screenNames";
import { check_username, check_fullname } from "../../../actions";

import { connect } from "react-redux";

class NameSelection extends React.Component {

    state = {
        username: "",
        fullname: ""
    }

    next = () => {
        let { username, fullname, navigation } = this.props;
        if (username.isValid &&
            fullname.isValid &&
            this.state.username != "" &&
            this.state.fullname != "") {
            navigation.navigate(screenNames.REGISTER_PASSWORD)
        }

        if (this.state.username === "" || this.state.fullname === "") this.props.check_fullname("") && this.props.check_username("")

    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={reg.box}>

                <Text style={reg.subTitle}>Name wählen</Text>

                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Dein Name</Text>
                    <TextInput
                        placeholder="Vorname Nachname"
                        style={reg.input}
                        onEndEditing={() => this.props.check_fullname(this.state.fullname)}
                        onChangeText={fullname => this.setState({ fullname })}
                        value={this.state.fullname}
                    />
                    {!this.props.fullname.isValid ? <Text style={reg.error}>{this.props.fullname.msg}</Text> : null}
                </View>




                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Benutzername</Text>
                    <TextInput
                        placeholder="@Koni"
                        style={reg.input}
                        onEndEditing={() => this.props.check_username(this.state.username)}
                        onChangeText={username => this.setState({ username })}
                        value={this.state.username}
                    />
                    {!this.props.username.isValid ? <Text style={reg.error}>{this.props.username.msg}</Text> : null}
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
        fullname: state.register.errors.fullname,
        username: state.register.errors.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check_username: username => {
            dispatch(check_username(username))
        },
        check_fullname: fullname => {
            dispatch(check_fullname(fullname))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NameSelection);
