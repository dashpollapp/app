import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";
import { totalSize } from "react-native-dimension";


export var login = StyleSheet.create({

    loginOrRegister: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
        padding: 16,
    },
    buttonText:{
        fontFamily: "GS2",
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },




    box: {
        backgroundColor: "#fff",
    },
    scroll: {
        height: "100%",
        padding: 16,
    },
    input: {
        backgroundColor: "rgba(0,0,0,0.05)",
        marginVertical: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        textAlign: "left",
        fontFamily: "GS2",
        color: "#333",
    },

    welcomeText: {
        fontFamily: "GS2",
        color: "#333",
        textAlign: "center",
        marginVertical: 32,
        fontSize: 18,
    },

    userSelected: {
        padding: 16,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.04)",
        borderRadius: 16,
    },
   
});