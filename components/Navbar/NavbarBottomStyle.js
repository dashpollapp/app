import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        padding: 12,
        flexDirection: "row",
        
        backgroundColor: "#fff",
        borderTopWidth: 2,
        borderColor: "#ddd",
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
