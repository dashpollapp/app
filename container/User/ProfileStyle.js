import { StyleSheet, Dimensions } from "react-native";

var screenWidth = Dimensions.get('window').width
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
    map: {
        marginVertical: 32,
        width: PBSize,
        height: PBSize * 0.625,
        margin: PBMargin,
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