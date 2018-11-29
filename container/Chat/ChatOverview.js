import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

export default class ChatOverview extends React.Component {

    render() {
        return (

            <View style={{ backgroundColor: "rgba(0,0,0,0.05)"}}>

                <ScrollView>
                    <Text style={{fontFamily: "GS2", textAlign: "center", paddingVertical: 12, fontSize: 16, color: "#666"}}>Geplant für 2019</Text>



                </ScrollView>

            </View>
        );
    }
}

ChatOverview.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const css = StyleSheet.create({

    h1: {
        fontFamily: "GS3",
        color: "#000",
        fontSize: 24,
        marginHorizontal: 16,
        marginVertical: 12,
    },


    chatSelected: {
        backgroundColor: "#efefef",
    },

    //Wetter
    chatWeather: {

    },
    //Ersmal so
    chatWeatherCrad: {
        fontFamily: "Poppins600",
        fontSize: 20,
    },




    sendTime: {
        alignSelf: 'center',
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "Poppins300",
        minWidth: 32,
    },
    sendTimeNew: {
        fontFamily: "Poppins600",
        color: "#36c187",
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins400",
        //ellipsizeMode: "tail",
        marginTop: -2,
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "Poppins500",
        flex: 1,
        flexDirection: "row",
    },
    name: {
        fontSize: 17,
        color: "#000",
        margin: 0,
        padding: 0,
        fontFamily: "Poppins600",
    },
    text: {
        //fontFamily: "Poppins500",
        alignSelf: "center",
        marginLeft: 12,
        flex: 1,
    },
    pb: {
        height: 52,
        width: 52,
        borderRadius: 26,

        //für Inhalt 
        justifyContent: 'center',
        alignItems: 'center'
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: 'row',
        alignItems: 'center',
    },
    chatNew: {
        borderLeftWidth: 8,
        borderColor: "#36c187",
        backgroundColor: "#f2f2f2",
    },
    chats: {

    },
    body: {
        width: "100%",
        height: "100%",
        paddingTop: 24,
        backgroundColor: "#fff",
    },
});