import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";

/* Polltype Auswahl */
export var s = StyleSheet.create({

    box: {
        height: "100%",
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },


    section: {
        marginBottom: 32,
    },
    heading: {
        fontFamily: "GS1",
        textTransform: "uppercase",
        color: "#aaa",
        fontSize: 14,
        marginBottom: 8,
        textAlign: "center",
    },


    // <Verbindungsanzeige>
    connectionBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginBottom: 12,
        marginTop: 4,
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
        padding: 8,
        paddingVertical: 12,
        marginBottom: 8,
        borderRadius: 9,
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