import React, { Component } from "react";
import { View, ScrollView, Text, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, } from "react-native";

import D from "../assets/style/default"
import FW from "../assets/style/framework"
import S from "./ChatStyle"

import DefaultPB from "../assets/img/pb.png"
import CloseImg from "../assets/img/close.png"
import AddMediaImg from "../assets/img/chat/AddMedia.png"
import SendImg from "../assets/img/chat/send.png"
import BackgroundImg from "../assets/img/background.jpg"

class Develope extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[FW.page]}>


                <View style={[S.navTopBox]}>
                    <View style={[S.navTopPerson]}>
                        <Image style={[S.navTopPB]} source={DefaultPB} />
                        <View style={{alignSelf: "flex-start", marginTop: 4,}}>
                            <Text style={[S.personName]}>Koni</Text>
                            <Text style={[S.personStatus, S.personStatusOnline,]}>Online (Handy)</Text>
                        </View>
                    </View>
                    <Image style={[S.navTopCloseImg]} source={CloseImg}/>
                </View>


                <Image source={BackgroundImg} style={[S.BackgroundImg]}/>
                <ScrollView style={[S.chatScroll]}>
                    <View style={[S.chatRow,]}>
                        <View style={[S.chatBox, S.chatBoxCenter,]}>
                            <Text style={[S.infoText,]}>Heute</Text>
                        </View>
                        <View style={[S.chatBox, S.chatBoxLeft,]}>
                            <Text style={[S.msgText,]}>Hallo Dashchat</Text>
                            <Text style={[S.time,]}>21:04</Text> 
                        </View>
                        <View style={[S.chatBox, S.chatBoxRight,]}>
                            <Text style={[S.msgText,]}>Hallo Koni</Text>
                            <Text style={[S.time,]}>21:05</Text> 
                        </View>
                    </View>
                </ScrollView>

                <KeyboardAvoidingView 
                enabled
                behavior={"padding"}>
                    <View style={S.navBotBox}>
                        <TouchableOpacity>
                            <Image style={S.AddMediaImg} source={AddMediaImg}/>
                        </TouchableOpacity>
                            
                        {/* Chat: Input */}
                        <TextInput
                            textAlignVertical={"top"}
                            underlineColorAndroid={"transparent"}
                            style={S.MainInput}
                            placeholder={"Nachricht schreiben"}
                            placeholderTextColor={"#333"}
                            numberOfLines={1}
                        />

                        <TouchableOpacity>
                            <Image style={S.SendImg} source={SendImg}/>
                        </TouchableOpacity>
                    </View>
              
                </KeyboardAvoidingView>

            </View>
        );
    }
}

export default Develope;
