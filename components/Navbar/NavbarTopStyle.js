import { StyleSheet, Platform } from "react-native";
import { ifIPhoneX, isIPhoneX } from "../../utils/iphoneX"

export default StyleSheet.create({
    backImg: {
        height: 12,
        width: 12,
        opacity: 0.7,
        marginRight: 8,
    },


    OptionsImg: {
        height: 24,
        width: 24,
    },


    //TitleBox für Title + Img
    titleBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    // Navbar Titel
    title: {
        display: "flex",
        fontFamily: "GS2",
        fontSize: 19,
        marginTop: 6,
        marginBottom: 6,
        color: "#444"
    },


    // Zurück Bild 
    imgBack: {
        height: 22,
        width: 22,
        margin: 7,
        opacity: 0.5,
    },

    // Alter Code
    box: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        flex: 1,
        padding: 8,
        paddingLeft: 18,
        ...ifIPhoneX({
            paddingTop: 8 + 28
        }, {
            paddingTop: 8 + (Platform.OS === "ios") ? 22 : 24
        }), 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1, //0
        borderColor: "#eee",
        width: "100%",
        minHeight: 67 + (isIPhoneX()) ? 28 : 0,

        /*
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        */

    },
    mainItem: {
        
    },
    mainItemLogoImg: {
        height: 30,
        width: 90,
    },
    mainItemPbImg: {
        height: 36,
        width: 36,
        borderRadius: 15
    },
    pageInfo: {
        flex: 1
    },
    push: {
        zIndex: 0,
        height: 67, // 
        width: "100%",
    }
});
