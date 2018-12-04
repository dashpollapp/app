import React from "react";
//import { } from "expo";
import { Dimensions, TouchableOpacity, ScrollView, Text, View } from "react-native";

import { s, } from "./SettingsStyle";

class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView style={[s.box]}>
        
                <TouchableOpacity style={[s.item,]}>
                    <Text style={s.name}>Unsere AGB</Text>
                    <Text style={s.description} numberOfLines={1}>
                        Bitte Seite erstellen -  Allgemeine Regeln für Dashpoll
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[s.item,]} onPress={() =>  this.props.navigation.navigate("Legal")} >
                    <Text style={s.name}>Rechtliches</Text>
                    <Text style={s.description} numberOfLines={1}>
                        Impressum & Datenschutzerklärung
                    </Text>
                </TouchableOpacity>
                <View style={[s.item, {opacity: 1}]}>
                    <Text style={s.name}>Dashpoll-Version</Text>
                    <Text style={s.description} numberOfLines={1}>
                        v0.1 (Entwicklerversion)
                    </Text>
                </View>


                <View style={[s.item, {opacity: 0.66}]}>
                    <Text style={s.name}>FAQ</Text>
                    <Text style={s.description} numberOfLines={1}>
                        geplant
                    </Text>
                </View>
                <View style={[s.item, {opacity: 0.66}]}>
                    <Text style={s.name}>Support kontaktieren</Text>
                    <Text style={s.description} numberOfLines={1}>
                        geplant
                    </Text>
                </View>
                <View style={[s.item, {opacity: 0.66}]}>
                    <Text style={s.name}>Feedback geben</Text>
                    <Text style={s.description} numberOfLines={1}>
                        geplant: Problem oder Fehler melden, Tipps geben,...
                    </Text>
                </View>

            </ScrollView>
        );
    }
}

export default MyData;
