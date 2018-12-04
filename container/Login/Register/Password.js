import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Image } from "react-native";

import {reg} from "./Style"
import D from "../../../assets/style/default"

import KiImg from "../../../assets/img/ki.png"

import * as screenNames from '../../../constants/screenNames';

class Password extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" enabled style={reg.box}>

                <Text style={reg.subTitle}>Sicherheit</Text>

                
                
                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Passwort</Text>
                    <TextInput 
                        placeholder="Passwort eingeben"
                        style={reg.input}
                        secureTextEntry={true} 
                    />
                </View>


                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Passwort widerholen</Text>
                    <TextInput 
                        placeholder="Passwort wiederholt eingeben"
                        style={reg.input}
                        secureTextEntry={true} 
                    />
                </View>

                
                <View style={[D.kiBoxes, {flex: 1,}]}>
                    <TouchableOpacity style={D.kiBox}>
                        <Image style={D.kiImg} source={KiImg}/>
                        <Text style={D.kiText}>Sicherheithalber wiederholen?</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_FINISH)} >  
                    <Text style={reg.nextText}>Weiter</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
        );
    }
}

export default Password;
