import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    box: {
        padding: 16,
    },




    h1: {
        fontSize: 26,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
    },
    link: {
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
        color: "#0984e3",
    },




    //*Später in eigener CSS (polls)
    pTitle: {
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
        color: "#000",
        fontWeight: "500",
    },
    pSubtitle: {
        fontFamily: Platform.OS === "ios" ? "Trebuchet MS" : "Roboto",
    },

    //Ein Beitrag
    pPost: {
        padding: 4,
    },

    pSubtitle: {
        color: "#aaa"
    },


    pPB: {
        height: 44,
        width: 44,
        borderRadius: 44 / 2.35,
        backgroundColor: "#aaa",
    },

    pPostHeader: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 8,
        alignItems: "center",
    },

    pPostHeaderText:{
        marginLeft: 12,
    }
});
