import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        padding: 12,
        flexDirection: "row",

        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: "#fff"
    },
    mainItem: {
        flex: 1,
        alignItems: "center"
    },
    mainItemImg: {
        height: 26,
        width: 26
    }
});
