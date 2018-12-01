import { StyleSheet, Platform,Dimensions } from "react-native";

export default StyleSheet.create({
    item: {
        backgroundColor: "rgba(0,0,0,0.05)",
        paddingHorizontal: 12,
        paddingVertical: 24,
        marginHorizontal: 4,
    },
    item_on: {
        backgroundColor: "rgba(0,0,0,0.15)",
    },
    itemText: {
        textAlign: "center",
        fontFamily: "GS2",
        color: "#555",
        fontSize: 15,
    },
})