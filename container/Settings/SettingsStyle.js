import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";

/* Polltype Auswahl */
export var s = StyleSheet.create({

    box: {
        height: "100%",
        flex: 1,
    },




    // <Verbindungsanzeige>
    connectionBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    connectionText: {
        fontFamily: "GS3",
        color: "#444",
    },
    connectionPoints: {
        flexDirection: "row",
    },
    connectionPoint: {
        margin: 2,
        width: 9,
        height: 9,
        backgroundColor: "#ccc",
        borderRadius: 4,
    },
    connectionPointGood: {
        backgroundColor: "#25ea71",
    },
    connectionPointOkay: {
        backgroundColor: "#4e4f4e",
    },
    connectionPointBad: {
        backgroundColor: "#db3f27",
    },
    // < /Verbindungsanzeige>



    logout: {
        backgroundColor: "#fff"
    },
    itemBar: {
        width: "100%",
        height: 0.5,
    },
    item: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    name: {
        color: "#333",
        fontFamily: "Poppins500",
        fontSize: 18
    },
    description: {
        marginTop: -4,
        color: "#777",
        fontFamily: "Poppins400",
        fontSize: 13,
        width: "100%"
    }
});