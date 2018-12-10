import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import screenNames from "../../constants/screenNames";
import { login } from "./SignInStyle";

import SplashImg from "../../assets/img/splash.png"

class Home extends React.Component {

    render() {
        return (
            <View style={login.box}>
                <View style={login.scroll}>
                    <Image style={{ width: 260, height: 120, alignSelf: "center", }} source={SplashImg} />
                    <Text style={login.welcomeText}>Hast du einen Dashpoll Account? 🤔</Text>

                    <View style={login.loginOrRegister}>
                        <TouchableOpacity style={login.button} onPress={() => this.props.navigation.navigate(screenNames.SIGN_IN)}>
                            <Text style={login.buttonText}>Ja</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={login.button} onPress={() => this.props.navigation.navigate(screenNames.SIGN_UP)}>
                            <Text style={login.buttonText}>Nein</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



export default Home;
