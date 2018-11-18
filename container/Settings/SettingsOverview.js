import React from "react";
import { StatusBar, TouchableOpacity, ScrollView, Text, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { auth_logout } from "../../actions"
import { s, csss, } from "./SettingsStyle";

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
                    height: "100%",           
                    marginTop: 4,
                }}                                                                                                                                                                                                                                                                                                             
            >
                {/* Expo/RN Einstellungen */}
                <View style={[csss.body]}>
                    <ScrollView>      

                        <View style={{backgroundColor: "rgba(0,0,0,0.05)"}}>
                            <View style={s.connectionBox}>
                                <Text style={s.connectionText}>Verbunden</Text>
                                <View style={s.connectionPoints}>
                                    <View style={[s.connectionPoint, s.connectionPointGood ]}></View>
                                    <View style={[s.connectionPoint, s.connectionPointOkay ]}></View>
                                    <View style={[s.connectionPoint, s.connectionPointBad ]}></View>
                                    <View style={s.connectionPoint}></View>
                                    <View style={s.connectionPoint}></View>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.navigation("Security")} style={s.item}>
                            <Text style={s.name}>Sicherheit</Text>
                            <Text style={s.description}>Anmeldung, Passwort, Sicherheits-Optionen…</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("Performance")} style={s.item}>
                            <Text style={s.name}>Performance</Text>
                            <Text style={s.description}>Mobile Daten, Speicherverbrauch, Performance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("MyData")} style={s.item}>
                            <Text style={s.name}>Meine Daten</Text>
                            <Text style={s.description}>Persönliche Daten, Privatsphäre, Datenschutz,… </Text>
                        </TouchableOpacity>

                        <View style={s.itemBar} />

                        <TouchableOpacity onPress={() => this.navigation("Legal")} style={s.item}>
                            <Text style={s.name}>Rechtliches</Text>
                            <Text style={s.description} numberOfLines={1}>
                                Nutzungsbedingungen, Impressum, Datenschutzrichtlinien,…
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("ReportProblem")} style={s.item}>
                            <Text style={s.name}>Problem Melden</Text>
                            <Text style={s.description} numberOfLines={1}>
                                Inhalt Melden, Fehler Melden, Frage, Feature vorschlagen,…
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.navigation("Help")} style={s.item}>
                            <Text style={s.name}>Hilfe</Text>
                            <Text style={s.description} numberOfLines={1}>
                                FAQ, Support, Updateinfos,…
                            </Text>
                        </TouchableOpacity>

                        <View style={s.itemBar} />

                        <TouchableOpacity onPress={() => this.navigation("AccountSettings")} style={s.item}>
                            <Text style={s.name}>Accounteinllungen</Text>
                            <Text style={s.description} numberOfLines={1}>
                                Accounts verwalten, Abmelden, Account Löschen
                            </Text>
                        </TouchableOpacity>
                        {/*DPI: "überalle Abmelden"*/}

                    </ScrollView>

                </View>
            </View>
        );
    }
}

Settings.propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired,
    auth_logout: PropTypes.func.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]).isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth_logout: user => {
            dispatch(auth_logout(user));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
