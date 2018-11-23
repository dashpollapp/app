import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';



export var ca = StyleSheet.create({

    h1: {
        fontFamily: "GS3",
        fontSize: 24,
        color: "#111",
        textAlign: "center",
        marginTop: 44,
        marginBottom: 4,
    },
    h2: {
        fontFamily: "GS1",
        fontSize: 18,
        color: "#555",
        textAlign: "center",
        marginBottom: 32,
    },





    copyImg: {
        height: 24,
        width: 24,
        marginTop: -4, // Center fix (nicht unsauber)
        marginHorizontal: 4,
    },
    postURL: {
        fontFamily: "GS2",
        color: "#74b9ff",
        fontSize: 16,
        marginHorizontal: 4,
    },
    copyBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",

        padding: 32,
    },






   
    shareBox: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 32,
        marginVertical: 24,
        justifyContent: "space-between",
    },
    shareItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 64,
    },
    shareItemImg: {
        flex: 1,
        height: 44,
        width: 44,
        marginVertical: 2,
    },
    shareItemText: {
        textAlign: "center",

        fontFamily: "GS1",
        fontSize: 12,
        color: "#aaa",
        marginVertical: 2,
    },



    skipButton: {
        marginTop: 64,
        bottom: 0,
        padding: 16,
    },
    skipButtonText: {
        fontFamily: "GS1",
        fontSize: 16,
        color: "#0984e3",
        textAlign: "center",
        textTransform: "uppercase",
    },

})
