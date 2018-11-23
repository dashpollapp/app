import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./SettingsStyle";

//Aktuell Fehlerhaft !!!

//In der falschen Datei weil was mit dem Navigator nicht geht ;/

class ReportProblem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[s.box]}>
                <ScrollView> 

                    <View style={s.section}>
                        <Text style={s.heading}>Sicherheit</Text>

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={[s.item, {opacity: 0.33}]}>
                            <Text style={s.name}>Passwort ändern</Text>
                            <Text style={s.description} numberOfLines={1}>
                            zul. vor 13
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={[s.item, {opacity: 0.33}]}>
                            <Text style={s.name}>Sichere Anmeldung</Text>
                            <Text style={s.description} numberOfLines={1}>
                            PIN, 2A oder Fingerabdruck hinzufügen
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={[s.item, {opacity: 0.33}]}>
                            <Text style={s.name}>Automatisch abmelden</Text>
                            <Text style={s.description} numberOfLines={1}>
                            Nach 30 Tagen
                            </Text>
                        </TouchableOpacity>
                    </View>



                    <View style={s.section}>
                        <Text style={s.heading}>Abmelden</Text>

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={[s.item, ]}>
                            <Text style={s.name}>Abmelden</Text>
                            <Text style={s.description} numberOfLines={1}>
                            Du wirst auf diesem Gerät abgemdeldet
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={[s.item, ]}>
                            <Text style={s.name}>Überall Abmelden</Text>
                            <Text style={s.description} numberOfLines={1}>
                                Du wirst auf allen Geräten von Dashpoll abgemeldet
                            </Text>
                        </TouchableOpacity>
                    </View>
                
                </ScrollView> 
            </View>
        );
    }
}

export default ReportProblem;
