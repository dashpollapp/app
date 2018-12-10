import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from "expo";

export const css = StyleSheet.create({

    h1: {
        fontFamily: "GS3",
        color: "#000",
        fontSize: 24,
        marginHorizontal: 16,
        marginVertical: 12,
    },


    chatNewBox: {
        height: 52, //wie PB
        width: 12,
        borderRadius: 5,
        backgroundColor: "#d83a3a",
        marginRight: 8,
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
        alignSelf: "center",
        justifyContent: "flex-end",
        color: "#929684",
        marginRight: 4,
        fontSize: 14,
        fontFamily: "GS1",
        minWidth: 32,
    },
    sendTimeNew: {
        fontFamily: "GS2",
        color: "#36c187",
    },
    lastMessage: {
        fontSize: 15,
        color: "#55574e",
        margin: 0,
        padding: 0,
        fontFamily: "GS1",
        //ellipsizeMode: "tail",
        marginTop: -2,
    },
    lastMessageBold: {
        color: "#55574e",
        fontFamily: "GS2",
        flex: 1,
        flexDirection: "row",
    },
    name: {
        fontSize: 18,
        color: "#111",
        margin: 0,
        padding: 0,
        fontFamily: "GS3",
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
        borderRadius: 22,

        //für Inhalt 
        justifyContent: "center",
        alignItems: "center"
    },
    chat: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 9,

        flexDirection: "row",
        alignItems: "center",
    },
    chatNew: {
        backgroundColor: "rgba(0,0,0,0.03)",
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