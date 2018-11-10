import React from "react";
import { StatusBar, TouchableOpacity, Image, ScrollView, Text, View, Alert } from "react-native";

import { settings, csss, pc, css } from "./SettingsStyle";
import db from "../../utils/db";
import store from "../../utils/store";
import { connect } from "react-redux";

class Settings extends React.Component {

    rootNavigation(route) {
        this.props.screenProps.rootNavigation.push(route);
    }

    navigation(route) {
        this.props.navigation.push(route);
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    width: "100%",
                    height: "100%"
                }}
            >
                {/* Expo/RN Einstellungen */}
                <StatusBar hidden={false} backgroundColor="#ffffff" barStyle="dark-content" />

                <View style={csss.navTopHelp} />
                <View style={[csss.body]}>
                    <ScrollView>
                        <View style={csss.navTopPush} />

                        <TouchableOpacity onPress={() => this.rootNavigation("Profile")} style={settings.item}>
                            <Text style={settings.name}>Mein Profil</Text>
                            <Text style={settings.description}>Zeigt Dein Profil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("EditProfile")} style={settings.item}>
                            <Text style={settings.name}>Profil bearbeiten</Text>
                            <Text style={settings.description}>Passe dein Profil an</Text>
                        </TouchableOpacity>

                        <View style={settings.itemBar} />

                        <TouchableOpacity onPress={() => this.navigation("Security")} style={settings.item}>
                            <Text style={settings.name}>Sicherheit</Text>
                            <Text style={settings.description}>Anmeldung, Passwort, Sicherheits-Optionen…</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("Performance")} style={settings.item}>
                            <Text style={settings.name}>Performance</Text>
                            <Text style={settings.description}>Mobile Daten, Speicherverbrauch, Performance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("MyData")} style={settings.item}>
                            <Text style={settings.name}>Meine Daten</Text>
                            <Text style={settings.description}>Persönliche Daten, Privatsphäre, Datenschutz,… </Text>
                        </TouchableOpacity>

                        <View style={settings.itemBar} />

                        <TouchableOpacity onPress={() => this.navigation("Legal")} style={settings.item}>
                            <Text style={settings.name}>Rechtliches</Text>
                            <Text style={settings.description} numberOfLines={1}>
                                Nutzungsbedingungen, Impressum, Datenschutzrichtlinien,…
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("ReportProblem")} style={settings.item}>
                            <Text style={settings.name}>Problem Melden</Text>
                            <Text style={settings.description} numberOfLines={1}>
                                Inhalt Melden, Fehler Melden, Frage, Feature vorschlagen,…
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("Help")} style={settings.item}>
                            <Text style={settings.name}>Hilfe</Text>
                            <Text style={settings.description} numberOfLines={1}>
                                FAQ, Support, Updateinfos,…
                            </Text>
                        </TouchableOpacity>

                        <View style={settings.itemBar} />

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={settings.item}>
                            <Text style={settings.name}>Accounteinllungen</Text>
                            <Text style={settings.description} numberOfLines={1}>
                                Accounts verwalten, Überall Abmelden, Account Löschen
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.logout()} style={[settings.item, settings.logout]}>
                            <Text style={settings.name}>Abmelden</Text>
                            <Text style={settings.description} numberOfLines={1}>
                                Melde dich von diesem Gerät ab
                            </Text>
                        </TouchableOpacity>

                        <View style={csss.navTopPush} />
                    </ScrollView>

                    {/*=Navbar top */}
                    <View style={css.navTop}>
                        <TouchableOpacity activeOpacity={0.1} onPress={() => this.props.screenProps.rootNavigation.goBack()}>
                            {/*<Image style={csss.navTopBack} source={require("../../assets/images/navbar/top/back.png")} />*/}
                        </TouchableOpacity>
                        <Text style={csss.name}>Einstellungen</Text>
                    </View>

                    {/*=Navbar unten*/}
                    {/*linear-Gradient border radius bug:    colors={['#e8f5f7', '#e5fcef']} start={[0, 1]} end={[1, 1]*/}
                    <View style={css.bottom}>
                        <TouchableOpacity style={csss.bottomText}>
                            <Text style={pc.textContinue}>Filtern</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={csss.bottomText}>
                            <Text style={pc.textPublic}>Auswahl</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Settings;
