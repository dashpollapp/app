import { StyleSheet } from "react-native";

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
        paddingTop: 26,
        zIndex: 1000,
        maxHeight: 52 + 24,
        backgroundColor: "#fff",
        flex: 1,
        padding: 8,
        paddingLeft: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#d8d8d8", //fff + rgba000,0.05 = #f2f2f2
        width: "100%",
        minHeight: 74,
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
        height: 74, //82 bei android
        width: "100%",
    }
});
