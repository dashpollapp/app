import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    box: {
        padding: 16,
    },




    h1: {
        fontSize: 26,
        fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
        color: "#000",
        fontWeight: "500",
    },
});
