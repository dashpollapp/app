import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as screenNames from "../../constants/screenNames";
import { login } from "./SignInStyle";

class Home extends React.Component {

    render() {
        return (
            <View style={login.box}>
                <View style={login.scroll}>
                    <Text style={login.welcomeText}>Hast du einen Dashpoll Account? 🤔</Text>

                    <View style={login.loginOrRegister}>
                        <TouchableOpacity style={login.button} onPress={() => this.props.navigation.navigate(screenNames.LOGIN_SELECT_USER)}>
                            <Text style={login.buttonText}>Ja</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={login.button}>
                            <Text style={login.buttonText}>Nein</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



export default Home;
