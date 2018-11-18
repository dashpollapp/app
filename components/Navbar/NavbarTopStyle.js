import { StyleSheet } from "react-native";

export default StyleSheet.create({

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
        marginVertical: 6,
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

        alignSelf: "stretch",
        flex: 1,
        padding: 8,
        paddingLeft: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 4,
        borderColor: "#ddd",
    },
    mainItem: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    mainItemLogoImg: {
        height: 30,
        width: 90
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
        height: 72, //82 bei android
        width: "100%",

    }
});
