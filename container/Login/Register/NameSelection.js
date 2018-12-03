import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";

import {reg} from "./Style"

import * as screenNames from '../../../constants/screenNames';

class NameSelection extends React.Component {
    render() {
        return (
            <View style={reg.box}>

                <Text style={reg.subTitle}>Name wählen</Text>

                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Dein Name</Text>
                    <TextInput 
                        placeholder="Vorname Nachname"
                        style={reg.input}
                    />
                </View>

                <Text style={reg.error}></Text>

                
                <View style={reg.inputBox}>
                    <Text style={reg.inputText}>Benutzername</Text>
                    <TextInput 
                        placeholder="@Koni"
                        style={reg.input}
                    />
                </View>

                <Text style={reg.error}></Text>


                <TouchableOpacity style={{padding: 32, opacity: 0}} onPress={() => this.props.navigation.navigate(screenNames.REGISTER_PASSWORD)} >  
                    <Text>(Weiter)</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NameSelection;
