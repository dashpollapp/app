import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';


export var reg = StyleSheet.create({

    box: {
        flex: 1, 
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
        
    },

    subTitle: { 
        fontSize: 14, 
        color: "#aaa", 
        fontFamily: "GS2", 
        textAlign: "center",
        marginBottom: 64,
    },



    inputText: {
        fontSize: 15, 
        color: "#555", 
        fontFamily: "GS3", 
        textAlign: "center" 
    },
    inputBox: {
        flex: 1,
    },
    input: {
        fontSize: 19, 
        color: "#222", 
        fontFamily: "GS2", 
        textAlign: "center" 
    },



    error: {
        fontSize: 14, 
        color: "#d62f2f", 
        fontFamily: "GS2", 
        textAlign: "center" 
    },



    nextText: {
        fontSize: 16,
        color: "#0984e3", 
        fontFamily: "GS2", 
        textAlign: "right",   

        padding: 24,
    },
})
