import { StyleSheet } from "react-native";
import { isIPhoneX } from "../../utils/iphoneX";

export default StyleSheet.create({
    box: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        padding: 16,
        paddingBottom: 17 + ((isIPhoneX()) ? 7 : 0), //BUGG!
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#999",

        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    mainItem: {
        flex: 1,
        alignItems: "center"
    },
    mainItemImg: {
        height: 26,
        width: 26
    },

    //Text für NavTopText.js
    text: {
        fontSize: 14,
        fontFamily: "GS2",
        color: "#444",
    },

});
