import React from 'react';
import { Platform, StatusBar, Alert, Button, TouchableOpacity, StyleSheet, Text, View, ScrollView, TextInput, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient, Font, AppLoading, BlurView } from 'expo';
import { pcSelect, pc, profile, login, loader, cc, css } from '../Style';

export default class ClassicType extends React.Component {

    render() {
        return (
            <View style={css.out}>
                <View style={pc.polltype}>
                    <Text style={pc.polltypeName}>Klassische Umfrage: <Text style={pc.polltypeCat}>(Auswahl)</Text></Text>
                    <Text style={pc.polltypeDescription}>Verschiede Antwortmöglichkeiten als Text. Benutzer können sich für 1 Antwortmöglichkeit entscheiden.</Text>
                </View>

                <TextInput
                    //Sinlose Returns sollen Abgefangen werden!!!
                    multiline
                    underlineColorAndroid={'transparent'}
                    style={pc.p1Answer}
                    placeholder={"Antwort 1"}
                    placeholderTextColor={"#111"}
                ></TextInput>
                <LinearGradient
                    //Bei 2 Antwortmöglichkeiten 50% width, bei 3 33.3%, bei 4 25%,...
                    style={pc.p1Bar}
                    colors={['#18a057', '#27ad63']}
                    start={[0, 1]}
                    end={[1, 1]}>
                </LinearGradient>

                <TextInput
                    multiline
                    underlineColorAndroid={'transparent'}
                    style={pc.p1Answer}
                    placeholder={"Antwort 2"}
                    placeholderTextColor={"#111"}
                ></TextInput>
                <LinearGradient
                    style={pc.p1Bar}
                    colors={['#18a057', '#27ad63']}
                    start={[0, 1]}
                    end={[1, 1]}>
                </LinearGradient>

                <TouchableOpacity>
                    <Text style={pc.p1AddAnswer}>Antwort hinzufügen</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
