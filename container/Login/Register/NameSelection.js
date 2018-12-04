import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";

import {reg} from "./Style"

import * as screenNames from '../../../constants/screenNames';

class NameSelection extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" enabled style={reg.box}>

                <Text style={reg.subTitle}>Name wählen</Text>

                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Dein Name</Text>
                    <TextInput 
                        placeholder="Vorname Nachname"
                        style={reg.input}
                    />
                    <Text style={reg.error}>Dies scheint kein gültiger Name zu sein</Text>
                </View>

                

                
                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Benutzername</Text>
                    <TextInput 
                        placeholder="@Koni"
                        style={reg.input}
                    />
                    <Text style={reg.error}>Der Benutzername muss 4 Zeichen lang sein</Text>
                </View>



                <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.REGISTER_PASSWORD)} >  
                    <Text style={reg.nextText}>Weiter</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

export default NameSelection;
