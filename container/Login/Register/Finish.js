import React from "react";
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Image } from "react-native";

import { reg } from "./Style"
import D from "../../../assets/style/default"

import SplashImg from "../../../assets/img/splash.png"
import DefaultPB from "../../../assets/img/pb.png"
import KiImg from "../../../assets/img/ki.png"

import screenNames from "../../../constants/screenNames";

class Finish extends React.Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ paddingHorizontal: 8, backgroundColor: "#fff", alignItems: "center", }}>
                    <Image style={{ width: 160, height: 60, marginTop: 32, }} source={SplashImg} />
                    <Text style={{ fontSize: 20, color: "#333", fontFamily: "GS2", textAlign: "center" }}>Wilkommen</Text>
                </View>
                <KeyboardAvoidingView behavior="padding" enabled style={reg.box}>
                    <Text style={reg.subTitle}>Account wurde erstellt</Text>


                    <View style={{ flex: 1, }}>
                        <Text style={reg.followPeopleText}>Danke für"s Testen der App :)</Text>
                        <View style={[{ justifyContent: "center", }, D.users,]}>
                            <TouchableOpacity>
                                <View style={[D.user_saves, D.user]}>
                                    <Image style={D.userPB} source={DefaultPB} />
                                    <Text style={D.userFullname}>Maxi</Text>
                                    <Text style={D.userName}>CTO+ & Api</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[D.user_saves, D.user]}>
                                    <Image style={D.userPB} source={DefaultPB} />
                                    <Text style={D.userFullname}>Luci</Text>
                                    <Text style={D.userName}>CTO & App</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[D.user_saves, D.user]}>
                                    <Image style={D.userPB} source={DefaultPB} />
                                    <Text style={D.userFullname}>Koni</Text>
                                    <Text style={D.userName}>CEO & FE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={reg.followPeopleTextBETA}>folge unserm Team</Text>
                    </View>

                    <View style={[D.kiBoxes, { flex: 1, }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.CREATE)} style={D.kiBox}>
                            <Image style={D.kiImg} source={KiImg} />
                            <Text style={D.kiText}>Beitrag erstellen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.push(screenNames.USER)} style={D.kiBox}>
                            <Image style={D.kiImg} source={KiImg} />
                            <Text style={D.kiText}>Profilbild hinzufügen</Text>
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate(screenNames.HOME)} >
                        <Text style={reg.nextText}>Überspringen</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>


        );
    }
}



export default Finish;
