import { StyleSheet, Dimensions } from "react-native";

var screenWidth = Dimensions.get("window").width
var PBSize = screenWidth - 84
var PBMargin = (screenWidth - PBSize) / 2

export default StyleSheet.create({
    followTextBox: {
        marginHorizontal: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    followerConterText: {
        marginTop: 8,
        fontFamily: "GS3",
        color: "#0984e3",
        fontSize: 15,
    },
    followConterText: {
        marginLeft: 12,
        marginTop: 8,
        fontFamily: "GS2",
        color: "#aaa",
        fontSize: 15,
    },
    followBox: {
        marginHorizontal: 52,
    },
    followButtonText_on: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#fff",
        fontSize: 15,
    },
    followButton_on: {
        backgroundColor: "#0984e3",
        borderWidth: 3,
        borderColor: "#0984e3",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 32,
    },
    //Wenn man nicht folgt
    followButtonText: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#0984e3",
        fontSize: 15,
    },
    followButton: {
        borderWidth: 3,
        borderColor: "#0984e3",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 32,
    },


    //Zitat
    quote: {
        textAlign: "center",
        fontFamily: "GS2",
        fontSize: 18,
        marginVertical: 44,
        color: "#444",
    },
    addQuote: {
        textAlign: "center",
        fontFamily: "GS3",
        fontSize: 15,
        marginVertical: 44,
        color: "#0984e3",
    },


    profileInfo: {
        textAlign: "center",
        fontFamily: "GS2",
        fontSize: 14,
        marginTop: 32,
        color: "#444",
    },
    profileInfoAnsw: {
        textAlign: "center",
        fontFamily: "GS1",
        fontSize: 18,
        marginTop: 4,
        color: "#888",
    },
    profileInfoAnswURL: {
        color: "#0984e3",
        fontSize: 16,
    },



    paddingBox: {
        padding: 16,
        alignItems: "center",
    },




    fullname: {
        textAlign: "center",
        fontFamily: "GS3",
        color: "#111",
        fontSize: 20,
    },
    name: {
        textAlign: "center",
        fontFamily: "GS1",
        color: "#777",
        fontSize: 16,
    },
    pb: {
        width: PBSize,
        height: PBSize,
        borderRadius: PBSize / 2 - 32,
        margin: PBMargin,
        marginBottom: PBMargin / 2,
    }
})